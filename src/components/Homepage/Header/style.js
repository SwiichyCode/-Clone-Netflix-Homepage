import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  z-index: 20;
`;

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row nowrap;
  height: auto;
  padding-top: 0.5rem;
  margin: 0 5%;
  color: #fff;

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    margin: 0 45px;
  }
`;

export const Logo = styled.img`
  width: auto;
  height: 1.5rem;
  margin-right: auto;

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    height: 2rem;
    width: 6.75rem;
  }

  @media only screen and (min-width: 950px) and (max-width: 1449px) {
    height: 2.25rem;
    width: 8.375rem;
  }

  @media only screen and (min-width: 1450px) {
    height: 2.8125rem;
    width: 10.4375rem;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 0.9rem;
  color: #fff;
  background-color: #e50914;
  border-radius: 3px;
  text-decoration: none;
  padding: 0.394rem 0.5rem;
  margin-top: 0;

  @media (min-width: 550px) {
    font-size: 1rem;
    padding: 9px 17px;
  }
`;
