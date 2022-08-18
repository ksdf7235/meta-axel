import styled from "styled-components";
import { useRecoilState } from "recoil";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";

const Character: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  return (
    <ChaLayout>
      <ChaContainer>
        <ChaConLayout>
          <h1>CHARACTER</h1>
          <h1>NFTS</h1>
          <h2>BURNT PINK SQUAD</h2>
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
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SilderProps key={i} id={`a${i}`}>
                  <h3>{i}</h3>
                </SilderProps>
              ))}
            </ChaSlider>
            <ChaSlider {...settings}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SilderProps key={i}>
                  <h3>{i}</h3>
                </SilderProps>
              ))}
            </ChaSlider>
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
  .slick-list {
    margin: 0 auto;
  }
  .slick-slider {
    background-color: rgba(248, 247, 216, 0.7);
  }
`;

const ChaGradientdown = styled.div`
  min-height: 100px;
  min-width: 100px;
  background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
  width: 100%;
  position: absolute;
  bottom: 0;
`;
const ChaGradientup = styled.div`
  min-height: 100px;
  min-width: 100px;
  background: linear-gradient(to bottom, black, rgba(0, 0, 0, 0));
  width: 100%;
  position: absolute;
  top: 0;
`;

const SilderProps = styled.div`
  height: 33%;
  width: 50%;
  min-width: 10vw;
  min-height: calc(65vh / 3);
  color: black;
  background-color: white;
`;

const ChaConLayout = styled.div`
  margin-right: 2rem;
`;
const ChaSliderLayout = styled.div`
  width: 100%;
  display: flex;
  min-height: 600px;
`;

const ChaGradationLayout = styled.div`
  width: 50%;
  display: flex;
  min-height: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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
`;
const ChaLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Character;
