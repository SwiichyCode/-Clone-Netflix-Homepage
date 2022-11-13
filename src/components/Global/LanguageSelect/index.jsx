import React from "react";
import * as S from "./style";

export const LanguageSelect = ({ size }) => {
  return (
    <S.StyledSelect size={size}>
      <S.IconTbWorld />
      <S.Text>English</S.Text>
      <S.IconIoMdArrowDropdown width={10} />
    </S.StyledSelect>
  );
};
