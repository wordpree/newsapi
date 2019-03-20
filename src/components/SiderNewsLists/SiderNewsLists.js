import React ,{Component} from 'react';
import SiderNews from '../SiderNews/SiderNews';
import {newsDataFetch} from '../../util/NewsDataFetch';
import './SiderNewsLists.scss';

class SiderNewsLists extends Component {

  constructor(props){
    super(props);
    this.state ={
      sources:[],
      loading:true,
      query:{
        country:'au',
        language:'en'
      }
    };
  }
  componentDidMount(){
    newsDataFetch('sources' ).then(data=>this.setState({
        sources:data,
        loading:false
        })
      );
  }
  render(){
    let sources = this.state.sources.map((item,index)=><SiderNews sourceInfo={item} key= {item.url+index} />);
    return (
      <div className='sources-container'>
        <div className='line'>
          {sources}
        </div>
      </div>
    );
  }


}
export default SiderNewsLists;
