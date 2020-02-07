import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

   constructor() {
      super();

      this.state = {
         lista: []
      }
   }

   async componentDidMount() {
      let resposta = await fetch('http://localhost:3000/series');
      const series = await resposta.json();
      this.setState({lista : series})
   }

   render() {
      console.log("Estou sendo renderizado");
      return (
         <div className="App">
            <form method="POST">
               <div className='form'>
                  <label htmlFor="nome">Nome</label>
                  <input type="text" id="nome" name="nome"></input>
                  <label htmlFor="sinopse">Sinopse</label>
                  <input type="text" id="sinopse" name="sinopse"></input>
                  <label htmlFor="ano_lancamento">Ano de lançamento</label>
                  <input type="text" id="ano_lancamento" name="ano_lancamento"></input>
                  <label htmlFor="temporadas">Temporadas</label>
                  <textarea id="temporadas" name="temporadas"></textarea>
                  <button type="submit">Salvar</button>
               </div>
            </form>
            <div className="list">
               <table>
                  <thead>
                     <tr>
                        <th>Nome</th>
                        <th>Sinopse</th>
                        <th>lançamento</th>
                        <th>Temporadas</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.state.lista.map(serie => {
                        return (
                           <tr>
                              <td>{serie.id}</td>
                              <td>{serie.nome}</td>
                              <td>{serie.sinopse}</td>
                              <td>{serie.lancamento}</td>
                              <td>{serie.temporadas}</td>
                           </tr>
                        )
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default App;
