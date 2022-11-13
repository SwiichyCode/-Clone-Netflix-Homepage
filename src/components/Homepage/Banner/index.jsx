import React from "react";
import * as S from "./style";

export const Banner = () => {
  return (
    <S.Container>
      <S.BadgingIndicator>New!</S.BadgingIndicator>
      <S.Text>
        Plans now start at <span>EUR5.99</span>
      </S.Text>
      <S.StyledLink to={"#"}>
        Learn More <S.ChevronRight />
      </S.StyledLink>
    </S.Container>
  );
};
