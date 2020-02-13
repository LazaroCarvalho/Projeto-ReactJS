import React, { Component } from 'react'
import './TabelaSeries.css'

const ListaSeries = (props) => {

    return (
        <div className="card-body card-body-flex">
            {
                props.series.map(serie => {
                    return (
                        <div className="card card-serie" key={serie.id}>
                            <div className="card-header">
                                <h5 className="card-title">{serie.nome}</h5>
                                <h6 className="card-title text-muted">
                                    {serie.ano_lancamento}
                                </h6>
                            </div>
                            <div className="card-body">
                                <img src="/logo192.png" className="card-img" />
                            </div>
                            <div className="card-footer">
                                {serie.temporadas}
                                {serie.temporadas > 1 ? ' temporadas' : ' temporada'}
                                <br/>
                                <a href="#">Sinopse</a>
                                <div className="text-center mt-1">
                                    <button className="btn btn-outline-danger btn-sm md-2" onClick={() => {
                                        if(window.confirm('Deseja realmente excluir?'))
                                            props.deleta(serie.id)
                                    }}>
                                        Delete
                                    </button>
                                    <button className="btn btn-outline-warning btn-sm md-2">
                                        Editar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

class TabelaSeries extends Component {

    render() {
        const { series, deleta } = this.props;
        return (
            <div className="card">
                <div className="card-header ">
                    <h5 className="text-center">Lista de Séries</h5>
                </div>
                <div>
                    <ListaSeries series={series} deleta={deleta}/>
                </div>
            </div>
            
        )
    }

}

export default TabelaSeries;