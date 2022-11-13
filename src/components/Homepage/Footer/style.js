import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 5%;
  color: #737373;
  margin: 0 auto;
  width: 90%;
`;

export const NumberPhone = styled.p`
  width: 100%;
  max-width: 1000px;
  margin: 0 0 30px;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  box-sizing: border-box;
  font-size: 13px;
  max-width: 1000px;
  margin-bottom: 20px;
`;

export const NavItem = styled.li`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  width: 25%;
  margin-bottom: 16px;
  padding: 0 12px 0 0;

  @media only screen and (max-width: 500px) {
    width: 50%;
  }
`;

export const NavLink = styled(Link)`
  color: #737373;
  text-decoration: none;
  font-size: 13px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  gap: 1em;
`;

export const SwiichyCode = styled.span`
  font-size: 13px;
`;
