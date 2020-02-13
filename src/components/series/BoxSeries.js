import React, { Component } from 'react'
import FormularioSeries from './FormularioSeries';
import TabelaSeries from './TabelaSeries';

class BoxSeries extends Component {

    constructor() {
        super();
  
        this.state = {
           series: []
        }
     }
  
     async componentDidMount() {
        let resposta = await fetch('http://localhost:3000/series');
        const series = await resposta.json();
        this.setState({series : series})
     }

     enviaDados = async (serie) => {

        const requisicao = {
            method : "POST",
            headers : {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(serie)
        }

        try {
            const retorno = await fetch('http://localhost:3000/series', requisicao);
            this.setState({series: [...this.state.series, serie]});
        } catch(erro) {
            console.log(erro)
        }

     }
    
     deleta = async id => {
        
        const seriesAtual = this.state.series;

        const params = {
            method: 'DELETE'
        }

        const retorno = await fetch('http://localhost:3000/series/' + id, params)

        if(retorno.status === 200) {
            this.setState({
                series: seriesAtual.filter(serie => {
                    return serie.id != id
                })
            })
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <FormularioSeries enviaDados = {this.enviaDados}/>
                    </div>
                    <div className="col-md-8">
                        <TabelaSeries 
                        series = {this.state.series}
                        deleta = {this.deleta}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default BoxSeries;