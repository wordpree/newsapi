import React,{ Component } from 'react';
import News from '../News/News';
import WithNewsLists from '../WithNewsLists/WithNewsLists';
import { Svg } from '../Svg/Svg';
import './NewsLists.scss';


class NewsLists extends Component {

  render(){

    let news = this.props.loading ? <Svg /> : this.props.articles.map((item,index)=><News articleInfo={item} key={item.url+index} />);
    return (
      <div className='articles-container'>
        <div className='row'>
          {news}
        </div>
      </div>
    );
  }
}
export default WithNewsLists(NewsLists)('articles');
