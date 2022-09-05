import styled from "styled-components";
import { useRecoilState } from "recoil";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import { BuildData, LandData } from "../../Data/dummy";
import Slider from "react-slick";
import { useState } from "react";
import BuildPlate from "./Build/BuildPlate";
import { selectLang } from "../../lib/selectLang";
import { LangState } from "../../atoms";

const Build: React.FC = () => {
  const [Lang, setLang] = useRecoilState(LangState);
  const { Build: buildLang } = selectLang(Lang);
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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          prevArrow: <></>,
          nextArrow: <></>,
          appendDots: (dots: any) => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <ul style={{ margin: "10px", width: "100%" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i: any) => <div></div>,
        },
      },
    ],
  };
  return (
    <BuildLayout id='build'>
      <BuildTitledesk>{buildLang?.mainTitle}</BuildTitledesk>
      <BuildContainer
        img={"image/build/build_img.png"}
        smimg={"image/build/build_img_sm.png"}
      >
        <BuildTitle>{buildLang?.mainTitle}</BuildTitle>
        <BuildSliderLayout>
          <BuildSlider {...settings}>
            {BuildData.map(({ img }, i: any) => (
              <BuildPlate
                key={i}
                img={img}
                title={buildLang?.ContainerContent[i]}
              />
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
  .slick-dots {
    bottom: -5rem;
    ul {
      padding: 1rem;
    }
    li {
      width: 50px;
      height: 20px;
      background: no-repeat url("/image/build/build_dot_focus.png");
      opacity: 0.2;
      background-size: contain;
    }
    .slick-active {
      opacity: 1;
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

const BuildSliderLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BuildContainer = styled.div<{ img?: string; smimg?: string }>`
  width: ${(props) => props.theme.CommonContentWidth};
  background-image: ${(props) => `url(${props.img})`};
  min-height: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${media.desktop} {
    width: 100%;
    background-image: ${(props) => `url(${props.smimg})`};
    background-size: 100% 95%;
    min-height: 1000px;
    margin: 10px;
  }
`;

const BuildTitle = styled.div`
  width: 90%;
  height: 10%;
  margin-left: 1rem;
  min-height: 100px;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 40px;
  ${media.desktop} {
    padding-bottom: 0px;
    display: none;
    width: 100%;
    background-size: cover;
    margin-bottom: 2rem;
    text-align: center;
  }
`;
const BuildTitledesk = styled.div`
  display: none;
  width: 90%;
  height: 20%;
  margin-left: 1rem;
  min-height: 50px;
  font-weight: 700;
  font-size: 40px;
  ${media.desktop} {
    display: block;
    width: 100%;
    background-size: cover;
    margin-top: 2rem;
    margin-bottom: 0px;
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
