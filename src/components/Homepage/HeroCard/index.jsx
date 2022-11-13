import React from "react";
import { InputRegister } from "../InputRegister";
import * as S from "./style";

export const HeroCard = () => {
  return (
    <S.Container>
      <S.Title>Unlimited movies, TV shows, and more</S.Title>
      <S.Subtitle>Watch anywhere. Cancel anytime.</S.Subtitle>
      <InputRegister />
    </S.Container>
  );
};
