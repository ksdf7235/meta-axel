import styled from "styled-components";
import { useRecoilState } from "recoil";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import { BuildData, LandData } from "../../Data/dummy";
import Slider from "react-slick";
import { useState } from "react";
import BuildPlate from "./Build/BuildPlate";

const Build: React.FC = () => {
  const settings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <DownArrow />,
    nextArrow: <UpArrow />,
  };
  return (
    <BuildLayout id='build'>
      <BuildContainer
        img={"image/build/build_img.png"}
        smimg={"image/build/build_img_sm.png"}
      >
        <BuildTitle>Building NFTs</BuildTitle>
        <BuildSliderLayout>
          <BuildSlider {...settings}>
            {BuildData.map(({ img, des, title }, i) => (
              <BuildPlate key={i} img={img} des={des} title={title} />
            ))}
          </BuildSlider>
        </BuildSliderLayout>
      </BuildContainer>
    </BuildLayout>
  );
};

const BuildSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    font-size: 0px;
  }
  .slick-prev {
    position: absolute;
    left: 20%;
    top: 90%;
    ${media.small} {
      display: none !important;
    }
  }
  .slick-next {
    position: absolute;
    top: 20%;
    left: 20%;
    ${media.small} {
      display: none !important;
    }
  }
`;

const UpArrow = styled.div`
  z-index: 100;
  background: no-repeat url("/image/common/arrow_up.png");
  background-size: contain;
  width: 50px;
  height: 60px;
  ${media.small} {
    display: none;
  }

  :hover {
    width: 50px;
    height: 60px;
    background: no-repeat url("/image/common/arrow_up.png");
  }
`;
const DownArrow = styled(UpArrow)`
  position: absolute;
  top: 20vh;
  right: 10%;
  background: no-repeat url("/image/common/arrow_down.png");
  :hover {
    background: no-repeat url("/image/common/arrow_down.png");
  }
`;
const Box = styled.div`
  min-width: 200px;
  min-height: 200px;
  background-color: white;
`;

const BuildSliderLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BuildContainer = styled.div<{ img?: string; smimg?: string }>`
  width: ${(props) => props.theme.CommonContentWidth};
  background-image: ${(props) => `url(${props.img})`};
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${media.small} {
    width: 100%;
    background-image: ${(props) => `url(${props.smimg})`};
    background-size: 100% 95%;
  }
`;

const BuildTitle = styled.div`
  width: 90%;
  height: 10%;
  margin-left: 1rem;
  min-height: 50px;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 30px;
  ${media.small} {
    width: 100%;
    background-size: cover;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const BuildLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Build;
