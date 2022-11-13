import styled from "styled-components";

export const StoryImgAnimation = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  min-width: 15em;
  border: 2px solid hsla(0, 0%, 100%, 0.25);
  border-radius: 0.75em;
  box-shadow: 0 0 2em 0 #000;
  background: #000;
  padding: 0.25em 0.65em;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 34.28px;
  margin-right: 1em;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: initial;
  gap: 0.3em;
`;

export const Title = styled.div`
  font-size: 0.9em;
  font-weight: 500;
`;

export const Subtitle = styled.div`
  color: #0071eb;
  font-size: 0.75em;
  font-weight: 400;
`;

export const LoaderAnimation = styled.div`
  width: 3em;
  display: block;
  content: "";
  background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif)
    50% no-repeat;
  background-size: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  height: 3em;
  outline: 2px solid #000;
  outline-offset: -2px;
`;
