import React from "react";
import { StoryCardAnimation } from "../StoryCardAnimation";
import * as S from "./style";

const StoryCard = ({
  title,
  subtitle,
  backgroundUrl,
  imgUrl,
  videoUrl,
  videoOn,
  imgOn,
  imgAnimationOn,
  device,
  rowReverse,
}) => {
  return (
    <S.Container>
      <S.Wrapper rowReverse={rowReverse}>
        <S.Box>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Box>
        {/* Video */}
        {videoOn && (
          <S.StoryVideoContainer>
            <S.StoryBackgroundImg src={backgroundUrl} />
            <S.StoryVideo autoPlay playsInline muted loop device={device}>
              <source src={videoUrl} type="video/mp4" />
            </S.StoryVideo>
          </S.StoryVideoContainer>
        )}
        {/* IMG */}
        {imgOn && (
          <S.StoryImgContainer>
            <S.StoryImg src={imgUrl} />
            {imgAnimationOn && <StoryCardAnimation />}
          </S.StoryImgContainer>
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export const StoryCards = () => {
  return (
    <>
      <StoryCard
        title={"Enjoy on your TV."}
        subtitle={
          "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        }
        backgroundUrl={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        }
        videoUrl={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        }
        videoOn
      />
      <StoryCard
        title={"Watch everywhere."}
        subtitle={
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        }
        backgroundUrl={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        }
        videoUrl={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
        }
        videoOn
        device
        rowReverse
      />
      <StoryCard
        title={"Create profiles for kids."}
        subtitle={
          "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        }
        imgUrl={
          "https://occ-0-6613-769.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11fs"
        }
        videoUrl={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
        }
        imgOn
      />
      <StoryCard
        title={"Download your shows to watch offline."}
        subtitle={"Available on all plans except Basic with ads."}
        imgUrl={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        }
        videoUrl={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
        }
        imgOn
        imgAnimationOn
        rowReverse
      />
    </>
  );
};
