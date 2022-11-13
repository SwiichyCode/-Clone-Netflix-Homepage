import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 4rem 2rem;
  box-sizing: border-box;
  position: relative;
  z-index: 20;

  @media (min-width: 550px) {
    padding: 6.5rem 3rem;
  }

  @media only screen and (min-width: 950px) and (max-width: 1449px) {
    padding: 9.5rem 5rem;
  }

  @media only screen and (min-width: 1500px) {
    padding: 11rem 5rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  line-height: 1.1;
  max-width: 640px;
`;

export const Subtitle = styled.h2`
  margin: 1rem auto;

  @media only screen and (min-width: 1450px),
    only screen and (min-width: 950px) and (max-width: 1449px) {
    margin: 1.5rem auto;
  }
`;
