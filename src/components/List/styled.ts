import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Ref https://www.w3schools.com/howto/howto_css_loader.asp
const LoadAnimation = styled.div`
  border: 5px solid #ffffff;
  border-radius: 50%;
  margin: 50px auto;
  border-top: 5px solid #3498db;
  width: 150px;
  height: 150px;
  -webkit-animation: ${spin} 0.7s linear infinite;
  animation: ${spin} 0.7s linear infinite; 
`;

export default LoadAnimation;
