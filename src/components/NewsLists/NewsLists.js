import React,{ Component } from 'react';
import News from '../News/News';
import { Svg } from '../Svg/Svg';
import './NewsLists.scss';
class NewsLists extends Component {
  render(){

    let news = this.props.loading ? <Svg /> : this.props.newsfeed.map(item=><News articleInfo={item} key={item.url} />);
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
