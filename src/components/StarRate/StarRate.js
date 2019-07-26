import React,{ Component } from 'react';
import { StarCss,StarDiv,StarRateP } from '../StyledComponents/StyledComponents';

class StarRate extends Component {

  constructor(props){
    super(props);
    this.state = {
      select:props.rate
    };

    this.selectclick = this.state.select;
  }

  handleClick(index){
    this.setState({select:index});
    this.selectclick = index;
  }

  handleMouseEnter(index){
    this.setState({select:index});
  }

  handleMouseLeave(){
    this.setState({select:this.selectclick});
  }

  render(){
    let star = [...Array(this.props.num)].map((item,index) =>{
      return <StarCss
                starselected = { index < this.state.select }
                key          = { index }
                onClick      = { this.handleClick.bind(this,index+1) }
                onMouseEnter = { this.handleMouseEnter.bind(this,index+1) }
                onMouseLeave = { this.handleMouseLeave.bind(this) }
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
