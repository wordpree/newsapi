import React ,{Component} from 'react';

class Error extends Component {

  constructor(props){

    super(props);
    this.state = {
      errorState:false,
      error:null,
      info:null
    };
  }

  componentDidCatch(error,info){
    this.setState({
      errorState:true,
      error:error,
      info:info
    });
  }

  render(){
    return this.state.errorState ? (
      <div>
        <h3>Something went wrong here!!</h3>
        <p>Error:{this.state.error.toString()}</p>
        <p>Stack:{this.state.info.componentStack}</p>
      </div>
    ) : this.props.children;
  }

}

export default Error;
