import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import BoxSeries from './components/series/BoxSeries'

class App extends Component {

    render() {
      return (
         <div className="App">
            <BoxSeries />
         </div>
      );
   }
   
}

export default App;
