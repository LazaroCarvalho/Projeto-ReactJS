import React, { Component } from 'react';

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
            <div>
                <form method="POST" onSubmit={this.enviaDados}>
                    <div className='form'>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" 
                                onChange={this.inputHandler} value={this.state.nome}></input>

                        <label htmlFor="sinopse">Sinopse</label>
                        <input type="text" id="sinopse" name="sinopse" 
                                onChange={this.inputHandler} value={this.state.sinopse}></input>

                        <label htmlFor="ano_lancamento">Ano de lançamento</label>
                        <input type="text" id="ano_lancamento" name="ano_lancamento"
                                onChange={this.inputHandler} value={this.state.ano_lancamento}></input>

                        <label htmlFor="temporadas">Temporadas</label>
                        <textarea id="temporadas" name="temporadas"
                                    onChange={this.inputHandler} value={this.state.temporadas}></textarea>

                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default FormularioSeries; 