import styled from "styled-components";
import { useRecoilState } from "recoil";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { CharacterData, CharacterData2 } from "../../Data/dummy";

const Character: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    speed: 1500,
    autoplay: false,
    autoplaySpeed: 1500,
    cssEase: "linear",
    prevArrow: <></>,
    nextArrow: <></>,
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: -1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    prevArrow: <></>,
    nextArrow: <></>,
  };
  return (
    <ChaLayout>
      <ChaContainer>
        <ChaConLayout>
          <h2>CHARACTER</h2>
          <h1>NFTS</h1>
          <h3>BURNT PINK SQUAD</h3>
          <ul>
            <li>이름 : 메타엑셀 아이돌즈</li>
            <li>별명 : 불탄핑크스쿼드</li>
            <li>민팅가 : 3.5 SOL</li>
            <li>총개수 : 13,000</li>
            <li>VIP판매 : 2,000</li>
            <li>퍼블릭 세일 : 9,000</li>
            <li>리저브 : 2,000</li>
          </ul>
        </ChaConLayout>
        <ChaGradationLayout>
          <ChaSliderLayout>
            <ChaSlider {...settings}>
              {CharacterData.map(({ img }, i) => (
                <SilderProps key={i} img={img}></SilderProps>
              ))}
            </ChaSlider>
            <ChaSlider2 {...settings2}>
              {CharacterData2.map(({ img }, i) => (
                <SilderProps key={i} img={img}></SilderProps>
              ))}
            </ChaSlider2>
          </ChaSliderLayout>
          <ChaGradientdown></ChaGradientdown>
          <ChaGradientup></ChaGradientup>
        </ChaGradationLayout>
      </ChaContainer>
    </ChaLayout>
  );
};

const ChaSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    font-size: 0px;
  }
  .slick-list :nth-child(1) {
  }
  .slick-slider {
  }

  ${media.small} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
  }
`;
const ChaSlider2 = styled(ChaSlider)`
  ${media.small} {
    margin-right: 0px;
    margin-left: 0.5rem;
  }
`;

const ChaGradientdown = styled.div`
  width: 100%;
  min-height: 100px;
  min-width: 100px;
  background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 0;

  ${media.small} {
    min-width: 300px;
  }
`;
const ChaGradientup = styled.div`
  width: 100%;
  min-height: 100px;
  min-width: 100px;
  background: linear-gradient(to bottom, black, rgba(0, 0, 0, 0));
  position: absolute;
  top: 0;
  ${media.small} {
    min-width: 300px;
  }
`;

const SilderProps = styled.div<{ img?: string }>`
  height: 30%;
  width: 80% !important;
  min-width: 80px;
  min-height: 150px;
  margin-bottom: 1rem;
  color: black;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  ${media.small} {
    width: 100% !important;
    min-height: 200px;
  }
`;

const ChaConLayout = styled.div`
  margin-right: 2rem;

  h2 {
    font-size: 40px;
    font-weight: 700;
  }
  h1 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  li {
    font-size: 14px;
    color: gray;
  }

  ${media.small} {
    order: 1;
  }
`;
const ChaSliderLayout = styled.div`
  width: 80%;
  display: flex;
  min-height: 300px;
  ${media.small} {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const ChaGradationLayout = styled.div`
  width: 50%;
  display: flex;
  min-height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  ${media.small} {
    width: 100%;
  }
`;

const ChaContainer = styled.div<{ img?: string }>`
  width: 60%;
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${media.small} {
    //0825 수정해야댐
    flex-direction: column;
    width: auto;
  }
`;
const ChaLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Character;
