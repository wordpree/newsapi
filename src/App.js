import React, { Component } from 'react';
import './App.css';
import NewsLists from './components/NewsLists/NewsLists';
import { newsDataFetch } from './util/NewsDataFetch';

class App extends Component {
  constructor(){
    super();
    this.state = {
      articles:[]
    }
  }
  componentDidMount(){
    newsDataFetch().then(data=>this.setState({
      articles:data
    }));
  }

  render() {
    return (
      <div className="App">
        <NewsLists newsfeed={this.state.articles} />
      </div>
    );
  }
}

export default App;
