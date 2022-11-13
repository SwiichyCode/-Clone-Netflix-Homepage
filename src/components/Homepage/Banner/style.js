import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";

export const Container = styled.div`
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 1rem;
`;

export const BadgingIndicator = styled.div`
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0.5rem 0.7rem;
  padding: 0.3rem 0.5rem;
  white-space: nowrap;
  border-radius: 17px;
  padding: 0.3rem 0.5rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red};

  @media (min-width: 500px) {
    white-space: initial;
    font-size: 0.8rem;
    margin: 0.5rem 1rem;
    padding: 0.2rem 0.5rem;
  }
`;

export const Text = styled.span`
  font-size: 0.875rem;
  padding-left: 0.3rem;
  line-height: 1.1rem;
  gap: 0.2rem;

  @media (min-width: 375px) and (max-width: 500px) {
    padding-left: 1rem;
  }
  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    padding-left: 0;
  }

  span {
    font-size: 0.938rem;
    font-weight: 800;

    @media (min-width: 500px) {
      font-size: 1.3rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  height: 100%;
  padding: 0 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 50px;
  text-decoration: none;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.blue};

  @media (min-width: 500px) {
    min-width: 98px;
    min-height: 37px;
    padding: 12px 1em;
    margin-right: 0.5em;
    margin-left: 1rem;
    line-height: 1em;
    font-size: 1rem;
  }
`;

export const ChevronRight = styled(HiOutlineChevronRight)`
  color: ${(props) => props.theme.colors.blue};
  font-size: 1.5em;
`;
