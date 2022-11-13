import React from "react";
import { SearchBar } from "../SearchBar";
import * as S from "./style";

export const HeroCard = () => {
  return (
    <S.Container>
      <S.Title>Unlimited movies, TV shows, and more</S.Title>
      <S.Subtitle>Watch anywhere. Cancel anytime.</S.Subtitle>
      <SearchBar />
    </S.Container>
  );
};
