import React, { Component } from 'react';
import './App.css';
import NewsLists from './components/NewsLists/NewsLists';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsLists />
      </div>
    );
  }
}

export default App;
