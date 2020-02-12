import React, { Component } from 'react'

const TabelaHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Sinopse</th>
                <th>lançamento</th>
                <th>Temporadas</th>
            </tr>
        </thead>
    )
}

const TabelaBody = props => {
    return (
        <tbody>
            {
                props.series.map(serie => {
                    return (
                        <tr key={serie.id}>
                            <td>{serie.nome}</td>
                            <td>{serie.sinopse}</td>
                            <td>{serie.ano_lancamento}</td>
                            <td>{serie.temporadas}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

class TabelaSeries extends Component {

    render() {
        const { series } = this.props;
        return (
            <div className="list">
                <table>
                    <TabelaHead />
                    <TabelaBody series = {series} />
                </table>
            </div>
        )
    }

}

export default TabelaSeries;