import styled from 'styled-components';

const Footer = styled.footer`
  left: 0px;
  bottom: 0px;
  width: 100%;
  background-color: rgb(25, 118, 210);
  color: rgb(255, 255, 255);
  border-top: 2px solid rgba(22, 8, 214, 0.2);
`;

const FooterText = styled.p`
  text-align: center;
  padding: 10px 0;
  margin: 0;
`;

const MainContainer = styled.main`
  margin: 0 auto;
`;

export { Footer, FooterText, MainContainer };
