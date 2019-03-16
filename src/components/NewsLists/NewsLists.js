import React,{ Component } from 'react';
import News from '../News/News';
class NewsLists extends Component {
  render(){

    let news = this.props.newsfeed.map(item=><News articleInfo={item}/>);
    return (
      <div className='container'>
        <div className='row'>
          {news}
        </div>
      </div>
    );
  }
}
export default NewsLists;
