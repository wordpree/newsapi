import React, { Component } from 'react';
import './App.scss';
import NewsLists from './components/NewsLists/NewsLists';
import SideNewsLists from './components/SideNewsLists/SideNewsLists';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={type:'top-headlines'};
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e){

    this.setState({
      type:e.target.getAttribute('data-state-value')
    });
  }


  render() {

    return (
      <div className="App">
        <nav>
          <ul>
            <li data-state-value='top-headlines' onClick={this.handleOnClick}>Hit Top</li>
            <span></span>
            <li data-state-value='everything' onClick={this.handleOnClick}>Everything</li>
          </ul>
        </nav>
        <NewsLists type={this.state.type} key={this.state.type} />
      </div>
    );
  }

}

export default App;
