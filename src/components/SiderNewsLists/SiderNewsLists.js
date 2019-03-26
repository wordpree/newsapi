import React ,{Component} from 'react';
import SiderNews from '../SiderNews/SiderNews';
import WithNewsLists from '../WithNewsLists/WithNewsLists';
import { Svg } from '../Svg/Svg';
import './SiderNewsLists.scss';

class SiderNewsLists extends Component {


  render(){

    let sources = this.props.loading ? <Svg /> :this.props.sources.map((item,index)=><SiderNews sourceInfo={item} key= {item.url+index} />);
    return (
      <div className='sources-container'>
        <div className='line'>
          {sources}
        </div>
      </div>
    );
  }


}
export default WithNewsLists(SiderNewsLists)('sources');
