import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { ArkData } from "../../Data/dummy";
import { LittleSpan, TitleH1 } from "../Common/Title";

const Ark: React.FC = () => {
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
        <TitleH1>META AXEL ARK</TitleH1>
        <LittleSpan>메타엑셀 nft홀더 전용 프라이빗 라운지</LittleSpan>
      </ArkContainer>
      <ArkSlideLayout>
        <SlideLayout>
          <ArkSlider {...settings}>
            {ArkData.map(({ img }, i) => (
              <Box key={`ark${i}`} img={img}></Box>
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

const Box = styled.div<{ img?: string }>`
  color: black;
  width: 200px;
  min-height: 600px;
  font-size: 66px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: fill;
  object-fit: contain;
  border: 10px solid black;
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
