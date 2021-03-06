import React,{ Component } from 'react';
import { newsDataFetch } from '../../util/NewsDataFetch';

const WithNewsLists = WrappedComponent => dataSource =>{

  return class WithNewsLists extends Component {
    constructor(props){
      super(props);
      this.state={
        [dataSource]:[],
        loading:true
      }
    }

    componentDidMount(){
      newsDataFetch(this.props.type).then(data=>this.setState({
          [dataSource]:data,
          loading:false
          })
        );

    }
    render(){
      return (
        <WrappedComponent {...this.state} />
      );
    }
  }
}

export default WithNewsLists;
