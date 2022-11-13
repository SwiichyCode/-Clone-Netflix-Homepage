import React from "react";
import { Banner } from "../../components/Homepage/Banner";
import { Header } from "../../components/Homepage/Header";
import { HeroCard } from "../../components/Homepage/HeroCard";
import { StoryCards } from "../../components/Homepage/StoryCards";
import { Footer } from "../../components/Homepage/Footer";
import { FAQ } from "../../components/Homepage/FAQ";
import backgroundImg from "../../assets/img/FR-en-20221031-popsignuptwoweeks-perspective_alpha_website_small.jpg";

import * as S from "./style";

export const Homepage = () => {
  return (
    <S.Container>
      {/* Banner */}
      <Banner />
      {/* Hero Card */}
      <S.Wrapper>
        <S.Background>
          <S.BackgroundImg
            src={backgroundImg}
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/9024bf3b-2a88-4871-99d1-e42e80c05bd2/FR-en-20221107-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/9024bf3b-2a88-4871-99d1-e42e80c05bd2/FR-en-20221107-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/9024bf3b-2a88-4871-99d1-e42e80c05bd2/FR-en-20221107-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
            alt="background image"
          />
        </S.Background>
        <Header />
        <HeroCard />
        <S.Gradient></S.Gradient>
      </S.Wrapper>
      {/* Story Cards */}
      <StoryCards />
      {/* FAQ */}
      <FAQ />
      {/* Footer */}
      <Footer />
    </S.Container>
  );
};
