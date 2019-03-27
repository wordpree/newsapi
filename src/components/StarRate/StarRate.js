import React,{ Component } from 'react';
import { StarCss,StarDiv } from '../StyledComponents/StyledComponents';

class StarRate extends Component {
  constructor(props){
    super(props);
    this.state = {
      select:1
    };
  }

  handleClick(index){
    this.setState({select:index})
  }

  render(){
    let star = [...Array(this.props.num)].map((item,index) =>{
      return <StarCss
                starselected ={index < this.state.select && true}
                key={index}
                onClick = {this.handleClick.bind(this,index+1)}
             />
    });

    return (
      <StarDiv>
        <p>{`News Rating: ${this.state.select} out of ${this.props.num}`}</p>
        {star}
      </StarDiv>
    )
  }

}

export default StarRate;
