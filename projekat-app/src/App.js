import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Forma from './components/Forma'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="klasa">
        <Forma/>
      </div>
    );
  }
}

export default App;
