import React, { Component } from 'react';

class FormularioSeries extends Component {

    constructor() {
        super();
     }
    
    inputHandler = e => {
        const { name, value } = e.target;
        this.props.inputHandler(name, value)
    }

    enviaDados = e => {
        e.preventDefault()
        this.props.enviaDados(this.state)
        this.setState(this.stateInicial)
    }

    render() {
        const { serie } = this.props
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Series
                </div>
                <div className="card-body">
                    <form method="POST" onSubmit={this.enviaDados}>
                        <div className="form-group">
                            <div className='form'>
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" name="nome" 
                                        onChange={this.inputHandler} value={serie.nome} className="form-control"></input>

                                <label htmlFor="sinopse">Sinopse</label>
                                <input type="text" id="sinopse" name="sinopse" 
                                        onChange={this.inputHandler} value={serie.sinopse} className="form-control"></input>

                                <label htmlFor="ano_lancamento">Ano de lançamento</label>
                                <input type="text" id="ano_lancamento" name="ano_lancamento"
                                        onChange={this.inputHandler} value={serie.ano_lancamento} className="form-control"></input>

                                <label htmlFor="temporadas">Temporadas</label>
                                <textarea id="temporadas" name="temporadas"
                                            onChange={this.inputHandler} value={serie.temporadas} className="form-control"></textarea>

                                <button type="submit" className="">Salvar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default FormularioSeries; 