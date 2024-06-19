// components/FooterStyles.js
import styled from "styled-components";

export const Box = styled.div`
  ${"" /* padding: .1% .1%; */}
  background: #b16ee1;
  bottom: 0;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #000;
  margin-bottom: 15px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: #fff;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #000;
  margin-bottom: 10px;
  font-weight: bold;
`;
