import styled from "styled-components";
import { useRecoilState } from "recoil";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { CharacterData4, CharacterData5 } from "../../Data/dummy";
import Timer from "../Common/Timer";

const Prequel: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
          slidesRows: 2,
        },
      },
    ],
  };
  return (
    <PrequelLayout>
      <PrequelContainer>
        <h1>BURNT PINK SQUAD PREQUEL</h1>
        <span>Burnt Pink Squad Prequel : 1,000 NFTs</span>
      </PrequelContainer>
      <PrequelSlideLayout>
        <SlideLayout>
          <PrequelSlider {...settings}>
            {CharacterData5.map(({ img }, i) => (
              <Box key={i} img={img}></Box>
            ))}
          </PrequelSlider>
          <SliderContent>
            <Timer name='meta' date='October 11, 2022 14:00:00 UTC' />
          </SliderContent>
          <PrequelSlider {...settings}>
            {CharacterData4.map(({ img }, i) => (
              <Box key={i} img={img}></Box>
            ))}
          </PrequelSlider>
          <Sliderbottom />
        </SlideLayout>
      </PrequelSlideLayout>
    </PrequelLayout>
  );
};

const PrequelSlider = styled(Slider)``;

const PrequelContainer = styled.div`
  margin-bottom: 5rem;
  text-align: center;
  h1 {
    font-size: 40px;
    margin-bottom: 3rem;
  }

  span {
    color: gray;
  }
`;
const Sliderbottom = styled.div`
  min-height: 100%;
  min-width: 100px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const SliderContent = styled.div`
  z-index: 10;
  min-height: 120px;
  min-width: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 700;
  background-image: url("image/sale/sale_bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: fill;
`;

const PrequelSlideLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Box = styled.div<{ img?: string }>`
  background-image: ${(props) => `url(${props.img})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: contain;
  color: black;
  width: 200px;
  height: 300px;
  ${media.small} {
    background-size: cover;
    object-fit: contain;
    height: auto;
    min-height: 200px;
  }
`;
const PrequelLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Prequel;
