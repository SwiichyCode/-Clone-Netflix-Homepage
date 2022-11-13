import styled from "styled-components";
import { Input } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: initial;
  z-index: 20;
  box-sizing: border-box;

  @media only screen and (min-width: 1450px),
    only screen and (min-width: 950px) and (max-width: 1449px) {
    align-items: center;
  }
`;

export const Title = styled.h3`
  text-align: center;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  font-size: 18px;
  padding: 0 10%;
  max-width: 450px;

  @media screen and (min-width: 740px) {
    font-size: 21px;
    line-height: 1.6rem;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1450px),
    only screen and (min-width: 950px) and (max-width: 1449px) {
    font-size: 1.2rem;
    max-width: none;
  }
`;

export const StyledInput = styled(Input)`
  width: 100%;
  padding: 8px;
  background: ${(props) => props.theme.colors.white};
  font-size: 2em;
  box-sizing: border-box;

  @media screen and (min-width: 740px) {
    padding: 12.57px 8px;
    font-size: 16px;
  }

  @media screen and (min-width: 950px) {
    max-width: initial;
    padding: 13px 8px;
  }
  @media only screen and (min-width: 1450px) {
    padding: 17.5px 8px;
  }
`;

export const ErrorMessage = styled.span`
  display: inline-block;
  color: #ffa00a;
  margin: 0;
  font-size: 15px;
  padding: 6px 3px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1450px),
    only screen and (min-width: 950px) and (max-width: 1449px) {
    margin: 0;
    max-width: 670px;
    flex-direction: initial;
    align-items: initial;
  }
`;

export const Box = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media only screen and (min-width: 1450px),
    only screen and (min-width: 950px) and (max-width: 1449px) {
    margin: 0;
    max-width: initial;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 128px;
  height: 40px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.red};
  border: none;
  border-radius: 2px;
  margin: 0;
  cursor: pointer;

  @media screen and (min-width: 950px) {
    max-width: 213px;
    height: 60px;
    font-size: 1.625rem;
  }

  @media screen and (min-width: 1450px) {
    max-width: 245px;
    height: 70px;
    font-size: 1.875rem;
  }
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 1.2em;
`;
