import * as React from "react";
import { StyledAccordions } from "../Accordion";
import { FAQdata } from "./data";
import { InputRegister } from "../InputRegister";
import * as S from "./style";

export const FAQ = () => {
  return (
    <S.Container>
      <S.Title>Frequently Asked Questions</S.Title>
      {/* Accordion GROUP */}
      <StyledAccordions data={FAQdata} />
      <InputRegister />
    </S.Container>
  );
};
