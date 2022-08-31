import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { ArkData } from "../../Data/dummy";
import { LittleSpan, TitleH1 } from "../Common/Title";
import { LangState } from "../../atoms";
import ReactPlayer from "react-player/youtube";

const Ark: React.FC = () => {
  const [Lang, setLang] = useRecoilState(LangState);
  const { Ark: arkLang } = selectLang(Lang);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20%",
    slidesToShow: 1,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };
  return (
    <ArkLayout>
      <ArkContainer>
        <TitleH1>{arkLang?.mainTitle}</TitleH1>
        <LittleSpan>{arkLang?.mainBoxTitle}</LittleSpan>
      </ArkContainer>
      <ArkSlideLayout>
        <SlideLayout>
          <ArkSlider {...settings}>
            {ArkData.map(({ img, url }, i) => (
              <IFrame
                src={`https://www.youtube.com/embed/${url}?controls=0&loop=1`}
                allow='accelerometer; picture-in-picture'
              ></IFrame>
            ))}
          </ArkSlider>
        </SlideLayout>
      </ArkSlideLayout>
    </ArkLayout>
  );
};

const ArkSlider = styled(Slider)`
  .slick-center {
    width: 60vw !important;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 0px;
  }
  .slick-prev {
    position: absolute;
    top: 30vh;
    left: 15%;
    ${media.small} {
      display: none !important;
    }
  }
  .slick-next {
    position: absolute;
    top: 30vh;
    right: 15%;
    ${media.small} {
      display: none !important;
    }
  }
`;

const ArkContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ArkSlideLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const IFrame = styled.iframe`
  width: 200px;
  min-height: 600px;

  .ytp-ytp-gradient-top {
    display: none;
  }
`;
const ArkLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LeftArrow = styled.div`
  z-index: 100;
  background: no-repeat url("/image/common/slider_arrow_left.png");
  background-size: contain;
  width: 50px;
  height: 60px;
  ${media.small} {
    display: none;
  }

  :hover {
    background: no-repeat url("/image/common/slider_arrow_left.png");
  }
`;
const RightArrow = styled(LeftArrow)`
  position: absolute;
  top: 30vh;
  right: 10%;
  background: no-repeat url("/image/common/slider_arrow_right.png");
  :hover {
    background: no-repeat url("/image/common/slider_arrow_right.png");
  }
`;
export default Ark;
