import React from 'react'
import Title from './components/Title'
import SideMenu from './components/SideMenu'
import Content from './components/Content'
import './App.css'

class Pocetna extends React.Component {
  render() {
    return (
      <div className="okvir">
        <Title/>
        <div className="pomocni">
            <SideMenu/>
            <Content/>
        </div>
      </div>
    );
  }
}

export default Pocetna;