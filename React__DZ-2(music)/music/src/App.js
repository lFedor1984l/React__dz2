import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

class App extends React.Component {
  constructor(props) {
   super(props)
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
