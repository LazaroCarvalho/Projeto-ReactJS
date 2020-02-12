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

    render() {
        return(
            <div>
                <FormularioSeries enviaDados = {this.enviaDados}/>
                <TabelaSeries series = {this.state.series}/>
            </div>
        )
    }

}

export default BoxSeries;