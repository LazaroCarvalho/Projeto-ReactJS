import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class FormularioSeries extends Component {

    constructor() {
        super();
  
        this.stateInicial = {
           nome: '',
           sinopse: '',
           ano_lancamento: '',
           temporadas: ''
        }

        this.state = this.stateInicial;

        PubSub.subscribe('editing', (msg, serie) => {
            this.setState(serie)
        })
     }
    
    inputHandler = e => {
        const { name, value } = e.target;

        this.setState({[name] : value});
    }

    enviaDados = e => {
        e.preventDefault()
        this.props.enviaDados(this.state)
        this.setState(this.stateInicial)
    }

    render() {
        return (
            <div className="card bg-dark text-white">
                <div className="card-header">
                    Cadastro de Series
                </div>
                <div className="card-body">
                    <form method="POST" onSubmit={this.enviaDados}>
                        <div className="form-group">
                            <div className='form'>
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" name="nome" 
                                        onChange={this.inputHandler} value={this.state.nome} className="form-control"></input>

                                <label htmlFor="sinopse">Sinopse</label>
                                <input type="text" id="sinopse" name="sinopse" 
                                        onChange={this.inputHandler} value={this.state.sinopse} className="form-control"></input>

                                <label htmlFor="ano_lancamento">Ano de lançamento</label>
                                <input type="text" id="ano_lancamento" name="ano_lancamento"
                                        onChange={this.inputHandler} value={this.state.ano_lancamento} className="form-control"></input>

                                <label htmlFor="temporadas">Temporadas</label>
                                <textarea id="temporadas" name="temporadas"
                                            onChange={this.inputHandler} value={this.state.temporadas} className="form-control"></textarea>

                                <button type="submit" className="btn btn-success form-control mt-2">Salvar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default FormularioSeries; 