import React from "react";
import logo from "../../../assets/img/Netflix_2015_logo.svg.png";
import { LanguageSelect } from "../../Global/LanguageSelect";
import * as S from "./style";

export const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo src={logo} alt="logo" />
        <LanguageSelect size={"small"} />
        <S.StyledLink>Sign In</S.StyledLink>
      </S.Wrapper>
    </S.Container>
  );
};
