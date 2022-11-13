import styled from "styled-components";
import { TbWorld } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";

export const StyledSelect = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.3em;
  background-color: transparent;
  margin-right: 1.2rem;
  border: ${(props) =>
    props.size === "small" ? "1px solid white" : "1px solid #333"};
  max-width: ${(props) => (props.size === "small" ? "108px" : "147px")};
  height: ${(props) => (props.size === "small" ? "28px" : "53px")};
  color: ${(props) =>
    props.size === "small" ? `${props.theme.colors.white}` : "#999"};
  font-size: ${(props) => (props.size === "small" ? ".875rem" : "18px")};

  @media (min-width: 550px) {
    min-height: 36.19px;
  }
`;

export const Text = styled.div`
  padding-left: 0.2rem;
  padding-right: 0.5em;
`;

export const IconTbWorld = styled(TbWorld)``;
export const IconIoMdArrowDropdown = styled(IoMdArrowDropdown)`
  font-size: 1.5rem;
`;
