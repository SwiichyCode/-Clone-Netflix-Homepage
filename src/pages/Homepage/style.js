import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

export const Wrapper = styled.div`
  position: relative;
  border-bottom: 8px solid #222;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: red;
  z-index: 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: none;
  }
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media only screen and (max-width: 349px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 550px) and (max-width: 949px) and (orientation: portrait) {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0,
      transparent 40%,
      transparent 75%,
      rgba(0, 0, 0, 0.8)
    );
  }
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;

  &::before {
    background-image: linear-gradient(180deg, #000 25%, transparent);
    content: "";
    height: 70px;
    position: absolute;
    width: 100%;
  }
`;
