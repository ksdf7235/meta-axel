import Slider from "react-slick";
import styled from "styled-components";
import { AttrData } from "../../../Data/dummy";
import media from "../../../lib/media";

type AttrProps = {
  img?: string;
  attribute: {
    Character: string;
    Hair_Style_N_Color: string;
    Head_Item: string;
    Background: string;
    Necklace: string;
    Wear_Inner: string;
    Earrings: string;
    Wear_Outer: string;
    Hand_Held_Item: string;
    Wings: string;
    Bra?: string;
    Point?: string;
    Signature?: string;
  };
};

const AttrPlate: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {AttrData.map(({ img, attribute }, num) => {
        const title: string[] = [];
        const keys: string[] = [];
        Object.keys(attribute).map((data) =>
          title.push(data.replace(/_/gi, " "))
        );
        Object.values(attribute).map((data) =>
          keys.push(data.replace(/_/gi, " "))
        );
        return (
          <AttrPlateLayout key={`attr${num}`}>
            <AttrImg img={img} />
            <Attr>
              {title.map((data, i) => (
                <AttrContent key={`title${i}`}>
                  <AttrTitle>{data}</AttrTitle>
                  <span>{keys[i]}</span>
                </AttrContent>
              ))}
            </Attr>
          </AttrPlateLayout>
        );
      })}
    </Slider>
  );
};

const LeftArrow = styled.div`
  z-index: 100;
  background: no-repeat url("/image/common/slider_arrow_left.png");
  background-size: contain;
  width: 50px;
  height: 60px;
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

const AttrPlateLayout = styled.div`
  background: linear-gradient(
    180deg,
    rgba(210, 53, 64, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 51.52%,
    rgba(210, 53, 64, 0.2) 100%
  );
  border: 1px solid rgba(210, 53, 64, 1);
  padding: 10px;
  display: flex;
  width: 100%;
  height: auto;
  min-width: 300px;
  min-height: 550px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* ${media.small} {
    :nth-child(n + 2) {
      display: none;
    }
  } */
`;

const AttrImg = styled.div<{ img?: string }>`
  width: 70%;
  height: 30%;
  margin: 1rem auto;
  min-height: 200px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;

const AttrContent = styled.div`
  background-color: #2d050a;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  border-radius: 20px;
  font-size: 12px;
`;

const AttrTitle = styled.span`
  font-size: 10px;
  display: inline-block;
  margin-bottom: 0.5rem;
  opacity: 0.6;
`;

const Attr = styled.div`
  width: 90%;
  min-height: 200px;
  display: grid;
  margin: 0 auto;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  grid-template-columns: 1fr 1fr;
  div:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
export default AttrPlate;
