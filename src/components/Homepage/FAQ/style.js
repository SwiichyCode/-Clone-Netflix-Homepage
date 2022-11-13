import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0;
  border-bottom: 8px solid #222;

  @media (min-width: 550px) {
    padding: 6.5rem 3rem;
  }

  .search-bar {
    padding: 0 5%;
  }
`;

export const Title = styled.h1`
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 2rem;
  font-size: 1.625rem;
  text-align: center;
  @media (min-width: 550px) {
    font-size: 2.5rem;
  }
`;
