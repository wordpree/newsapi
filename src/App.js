import React, { Component } from 'react';
import './App.css';
import NewsLists from './components/NewsLists/NewsLists';
import SelectLists from './components/SelectLists/SelectLists';
import SideNewsLists from './components/SideNewsLists/SideNewsLists';


class App extends Component {

  render() {

    return (
      <div className="App">
        <SelectLists />
        <NewsLists />
        <SideNewsLists />
      </div>
    );
  }
}

export default App;
