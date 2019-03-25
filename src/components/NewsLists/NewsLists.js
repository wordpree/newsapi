import React,{ Component } from 'react';
import News from '../News/News';
import Error from '../Error/Error';
import { Svg } from '../Svg/Svg';
import './NewsLists.scss';
import { newsDataFetch } from '../../util/NewsDataFetch';

class NewsLists extends Component {
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:true
    }
  }

  componentDidMount(){

    newsDataFetch(this.props.type).then(data=>this.setState({
        articles:data,
        loading:false
        })
      );

  }
  render(){

    let news = this.state.loading ? <Svg /> : this.state.articles.map((item,index)=><News articleInfo={item} key={item.url+index} />);
    return (
      <div className='articles-container'>
        <div className='row'>
          {news}
        </div>
      </div>
    );
  }
}
export default NewsLists;
