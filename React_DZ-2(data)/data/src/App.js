import React, { Component } from 'react';
import './App.css';

import DataCreate from './components/DataCreate/DataCreate';
import DataLook from './components/DataLook/DataLook';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DataCreate/>
      </div>
    );
  }
}

export default App;
