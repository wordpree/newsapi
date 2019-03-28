import styled from 'styled-components';

/*css is originally from https://codepen.io/fxm90/pen/yOBWVe*/
export const StarCss = styled.i`

  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  cursor:pointer;

  margin-left: .9em;
  margin-right: .9em;
  margin-bottom: 1.2em;

  border-right:  .3em solid transparent;
  border-bottom: ${ props=>props.starselected ? '.7em  solid #FC0':'.7em  solid #fff'};
  border-left:   .3em solid transparent;

  font-size: 8px;

  :before, :after {
    content: '';

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: .6em;
    left: -1em;

    border-right:  1em solid transparent;
    border-bottom: ${ props=>props.starselected ? '.7em  solid #FC0':'.7em  solid #fff'};
    border-left:   1em solid transparent;

    transform: rotate(-35deg);
  }

  :after {
    transform: rotate(35deg);
  }
`;

export const StarDiv = styled.div`
  padding:0.2em 0 1em 0;
`;

export const StarRateP = styled.p`
  font-size:0.75em;
  @media only screen and (min-width:960px) {
    font-size:1em;
  }
`;
