import styled from "styled-components";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { CharacterData3 } from "../../Data/dummy";
import Timer from "../Common/Timer";

const Fame: React.FC = () => {
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
    <SaleLayout>
      <SaleContainer>
        <LOGODIV>
          <img src={"image/fame/famexmeta.png"} />
        </LOGODIV>
        <span>META AXEL x FAME</span>
        <h1>BURNT PINK SQUAD DESIGNER EDITION</h1>
      </SaleContainer>
      <SlideLayout>
        <SliderContent>
          <Timer name='fame' date='October 20, 2022 14:00:00 UTC' />
        </SliderContent>
        <SaleSlider {...settings}>
          {CharacterData3.map(({ img }, i) => (
            <Box key={i} img={img}></Box>
          ))}
        </SaleSlider>
        <Sliderbottom />
      </SlideLayout>
    </SaleLayout>
  );
};

const SaleSlider = styled(Slider)``;

const LOGODIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SaleContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  h1 {
    font-size: 40px;
    margin-bottom: 3rem;
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
  margin-bottom: 2rem;
`;

const SaleSlideLayout = styled.div`
  width: 100%;
  min-height: 600px;
  background-image: url("image/fame/image.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
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
const SaleLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Fame;
