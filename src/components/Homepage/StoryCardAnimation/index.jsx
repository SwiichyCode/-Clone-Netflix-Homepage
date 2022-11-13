import React from "react";
import * as S from "./style";

export const StoryCardAnimation = () => {
  return (
    <S.StoryImgAnimation>
      <S.Wrapper>
        <S.Image
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
          alt=""
        />
        <S.Box>
          <S.Title>Stranger Things</S.Title>
          <S.Subtitle>Downloading...</S.Subtitle>
        </S.Box>
      </S.Wrapper>
      <S.LoaderAnimation></S.LoaderAnimation>
    </S.StoryImgAnimation>
  );
};
