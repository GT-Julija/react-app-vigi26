import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
  0% { height: 100px; width: 100px; }
  30% { height: 400px; width: 400px; opacity: 1 }
  40% { height: 405px; width: 405px; opacity: 0.3; }
  100% { height: 100px; width: 100px; opacity: 0.6; }
`;

const Circle = styled.div`
  height: 100px;
  width: 100px;
  border: 5px solid black;
  border-radius: 50%;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;

const Breathe = () => {
  return <Circle />;
};

export default Breathe;
