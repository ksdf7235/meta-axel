import styled from "styled-components";
import { useRecoilState } from "recoil";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { CharacterData, CharacterData2 } from "../../Data/dummy";
import { LangState } from "../../atoms";
import { selectLang } from "../../lib/selectLang";

const Character: React.FC = () => {
  const [Lang, setLang] = useRecoilState(LangState);
  const { Character: ChaLang } = selectLang(Lang);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    speed: 1500,
    autoplay: true,
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
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    prevArrow: <></>,
    nextArrow: <></>,
  };
  return (
    <ChaLayout id='chara'>
      <ChaContainer>
        <ChaConLayout>
          <h2>CHARACTER</h2>
          <h1>NFTS</h1>
          <h3>BURNT PINK SQUAD</h3>
          <ul>
            {ChaLang.ChaAttr?.map((data, i) => (
              <li>{data}</li>
            ))}
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
  .slick-list {
  }

  .slick-slide {
  }

  ${media.small} {
    width: 90%;
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
  bottom: -5px;

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
  top: -5px;
  ${media.small} {
    min-width: 300px;
  }
`;

const SilderProps = styled.div<{ img?: string }>`
  height: 30%;
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

  ${media.desktop} {
    order: 1;
  }
`;
const ChaSliderLayout = styled.div`
  width: 60%;
  display: flex;
  min-height: 300px;

  ${media.desktop} {
    width: 40%;
    justify-content: space-between;
    align-items: center;
  }
  ${media.small} {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const ChaGradationLayout = styled.div`
  display: flex;
  min-height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  ${media.small} {
    width: 80%;
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

  ${media.desktop} {
    //0825 ???????????????
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
