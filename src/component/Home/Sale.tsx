import styled from "styled-components";
import { useRecoilState } from "recoil";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { CharacterData } from "../../Data/dummy";

const Sale: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <SaleLayout>
      <SaleContainer>
        <h1>the first nft sale 2022.08</h1>
        <span>meta axel’s first collection : 10,000 nfts</span>
      </SaleContainer>
      <SaleSlideLayout>
        <SlideLayout>
          <SaleSlider {...settings}>
            {CharacterData.map(({ img }, i) => (
              <Box key={i} img={img}>
                <h3>{i}</h3>
              </Box>
            ))}
          </SaleSlider>
          <SliderContent>
            <div>
              <span>200 : 59 : 59</span>
            </div>
          </SliderContent>
          <SaleSlider {...settings}>
            {CharacterData.map(({ img }, i) => (
              <Box key={i} img={img}>
                <h3>{i}</h3>
              </Box>
            ))}
          </SaleSlider>
          <Sliderbottom />
        </SlideLayout>
      </SaleSlideLayout>
    </SaleLayout>
  );
};

const SaleSlider = styled(Slider)``;

const SaleContainer = styled.div`
  margin-bottom: 5rem;
`;
const Sliderbottom = styled.div`
  min-height: 300px;
  min-width: 100px;
  background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const SliderContent = styled.div`
  min-height: 200px;
  min-width: 100px;
  background: black;
  border-top: 5px solid green;
  border-bottom: 5px solid green;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 700;
`;

const SaleSlideLayout = styled.div`
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
  background-color: white;
  color: black;
  width: 200px;
  height: 300px;
  font-size: 66px;
`;
const SaleLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Sale;
