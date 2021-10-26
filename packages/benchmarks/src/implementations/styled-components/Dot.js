import styled from 'styled-components';
import View from './View';

const Dot = styled(View).attrs((props) => ({
  style: {
    borderRightWidth: `${props.size / 2}px`,
    borderBottomWidth: `${props.size / 2}px`,
    borderLeftWidth: `${props.size / 2}px`,
    borderBottomColor: `${props.color}`,
    marginLeft: `${props.x}px`,
    marginTop: `${props.y}px`
  }
}))`
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-top-width: 0;
  transform: translate(50%, 50%);
`;

export default Dot;
