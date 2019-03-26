import React, { Component } from 'react';
import './App.scss';
import NewsLists from './components/NewsLists/NewsLists';
import SiderNewsLists from './components/SiderNewsLists/SiderNewsLists';

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
        <nav className='navbar'>
          <ul>
            <li data-state-value='top-headlines' onClick={this.handleOnClick}>Hit Top</li>
            <span></span>
            <li data-state-value='everything' onClick={this.handleOnClick}>Everything</li>
          </ul>
        </nav>
        <div className='news-entry'>
          <NewsLists type={this.state.type} key={this.state.type} />
          <SiderNewsLists type='sources'/>
        </div>
      </div>
    );
  }

}

export default App;
