import React,{ Component } from 'react';
import { StarCss,StarDiv,StarRateP } from '../StyledComponents/StyledComponents';

class StarRate extends Component {
  constructor(props){
    super(props);
    this.state = {
      select:1,
      tempSelect:0
    };
  }

  handleClick(index){
    this.setState({select:index})
  }

  handleMouseEnter(index){
    this.setState({tempSelect:index})
  }

  handleMouseLeave(index){
    this.setState({tempSelect:this.state.select})
  }

  render(){
    let star = [...Array(this.props.num)].map((item,index) =>{
      return <StarCss
                starselected ={ index < this.state.select }
                startempselected ={ index < this.state.tempSelect }
                key={ index }
                onClick = { this.handleClick.bind(this,index+1) }
                onMouseEnter = { this.handleMouseEnter.bind(this,index+1) }
                onMouseLeave = { this.handleMouseLeave.bind(this,index+1) }
             />
    });

    return (
      <StarDiv>
        <StarRateP>{`News Rating: ${this.state.select} out of ${this.props.num}`}</StarRateP>
        {star}
      </StarDiv>
    )
  }

}

export default StarRate;
