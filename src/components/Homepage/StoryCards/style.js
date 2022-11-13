import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-bottom: 8px solid #222;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  box-sizing: border-box;
  padding: 50px 5%;

  @media screen and (min-width: 950px) {
    flex-direction: ${(props) =>
      props.rowReverse ? "row-reverse" : "initial"};
    text-align: initial;
    max-width: 85%;
    margin: auto;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 950px) {
    width: 72%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0.5rem;
`;
export const Subtitle = styled.h2`
  margin: 0.75em 0 0.25em;

  @media screen and (min-width: 950px) {
    max-width: 550px;
  }
`;

export const StoryVideoContainer = styled.div`
  position: relative;
  top: -20px;
  margin-top: 1em;
  max-width: 600px;
  width: 100%;
  overflow: hidden;
`;

export const StoryImgContainer = styled.div`
  position: relative;
  margin-top: 1em;
  max-width: 600px;
  width: 100%;
`;

export const StoryImg = styled.img`
  max-width: 100%;
`;

export const StoryBackgroundImg = styled.img`
  position: relative;
  width: 100%;
  z-index: 30;
`;

export const StoryVideo = styled.video`
  position: absolute;
  top: 48%;
  top: ${(props) => (props.device ? "34%" : "48%")};
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: ${(props) => (props.device ? "63%" : "73%")};
  object-fit: contain;
  z-index: 20;

  source {
    width: 100%;
  }
`;
