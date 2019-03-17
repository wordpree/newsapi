import React, { Component } from 'react';
import './App.css';
import NewsLists from './components/NewsLists/NewsLists';
import { newsDataFetch } from './util/NewsDataFetch';

class App extends Component {
  constructor(){
    super();
    this.state = {
      articles:[],
      loading:true
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      newsDataFetch().then(data=>this.setState({
        articles:data,
        loading:false
        })
      )
    },1000);


  }

  render() {
    return (
      <div className="App">
        <NewsLists newsfeed={this.state.articles} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
