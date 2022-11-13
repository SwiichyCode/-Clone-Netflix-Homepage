import React from "react";
import { LanguageSelect } from "../../Global/LanguageSelect";
import { homeLink } from "./data";
import * as S from "./style";

export const Footer = () => {
  return (
    <S.Container>
      <S.NumberPhone>Questions? Call (+33) 0805-543-064</S.NumberPhone>
      <S.Nav>
        <S.NavList>
          {homeLink.map((item, index) => {
            return (
              <S.NavItem keys={index}>
                <S.NavLink to={item.url}>{item.name}</S.NavLink>
              </S.NavItem>
            );
          })}
        </S.NavList>
      </S.Nav>
      <S.Wrapper>
        <LanguageSelect />
        <S.SwiichyCode>Swiichy Code</S.SwiichyCode>
      </S.Wrapper>
    </S.Container>
  );
};
