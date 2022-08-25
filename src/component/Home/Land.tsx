import styled from "styled-components";
import { useRecoilState } from "recoil";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import { BuildData, LandData } from "../../Data/dummy";
import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const box = {
  invisible: {
    x: 500,
    opacity: 1,
    scale: 1,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: { x: -500, opacity: 0, scale: 0, transition: { duration: 1 } },
};
const Land: React.FC = () => {
  const [click, setClick] = useState(1);
  const toggleClick = (id: any) => setClick(id);
  return (
    <BuildLayout>
      <LandContainer>
        <LandTitle>
          <h1>LAND NFTS</h1>
          <span>
            각각의 땅들은 모두 장단점이 있고, 특수랜드는 좀비가 나올지도 모르고
            특별한 기능이 있다. 특수랜드는 추후 게임 오픈 시점에 확정된 NFT로
            교환된다.
          </span>
        </LandTitle>
        <LandLayout
          img={"image/build/land_frame.png"}
          img2={"image/build/land_frame_bg.png"}
        >
          <AnimatePresence>
            {LandData.map(({ img }, i) => (
              <Box
                key={i}
                onClick={() => toggleClick(i)}
                style={{
                  width: click === i ? "300px" : "200px",
                  margin: click === i ? "0px" : " 0px 1vh",
                  zIndex: click === i ? 20 : 0,
                  opacity: click === i ? 1 : 0.5,
                }}
                layoutId={`${i}`}
                src={img}
              />
            ))}
          </AnimatePresence>
        </LandLayout>
      </LandContainer>
    </BuildLayout>
  );
};

const LandSlider = styled(Slider)`
  .slick-center {
  }
`;
const Box = styled(motion.img)`
  width: 300px;
  object-fit: contain;
  margin: 30px;
  ${media.small} {
    width: 100px;
    min-height: 100px;
  }
`;

const CenterBox = styled(Box)`
  scale: 1.2;
`;

const BuildContainer = styled.div<{ img?: string; smimg?: string }>`
  width: ${(props) => props.theme.CommonContentWidth};
  background-image: ${(props) => `url(${props.img})`};
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${media.small} {
    width: 100%;
    background-image: ${(props) => `url(${props.smimg})`};
    background-size: 100% 95%;
  }
`;

const LandContainer = styled(BuildContainer)`
  margin-top: 5rem;
`;

const LandTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 40px;
  }
  span {
    line-height: 21.7px;
    letter-spacing: -1.5%;
    margin-top: 2rem;
    display: inline-block;
    width: 50%;
    text-align: center;
    color: gray;
  }
`;

const LandLayout = styled.div<{ img?: string; img2?: string }>`
  width: 100%;
  min-height: 400px;
  background-image: ${(props) => `url(${props.img2}), url(${props.img})`};
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.small} {
    flex-direction: column;
  }
`;

const BuildContentImgDiv = styled.div`
  display: flex;
  min-width: 400px;
  height: 50%;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    margin-right: 5px;
  }
  ${media.small} {
    min-width: 200px;
  }
`;

const BuildArrowUp = styled.button`
  width: 40px;
  height: 30px;
  background: no-repeat url("/image/common/arrow_up.png");
  border: none;
  ${media.small} {
    display: none;
  }
`;
const BuildArrowDown = styled(BuildArrowUp)`
  background: no-repeat url("/image/common/arrow_down.png");
`;

const BuildContentDiv = styled.div`
  margin: 5rem 0px;

  h1 {
    font-size: 40px;
    color: #d23540;
    font-weight: 700;
  }
  h2 {
    margin: 1rem 0px;
    font-size: 20px;
    font-weight: 700;
  }
  span {
  }
  ${media.small} {
    margin: 3rem 0px;
  }
`;

const BuildTitle = styled.div`
  width: 90%;
  height: 10%;
  margin-left: 1rem;
  min-height: 50px;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 30px;
  ${media.small} {
    width: 100%;
    background-size: cover;
    margin-bottom: 2rem;
    text-align: center;
  }
`;
const BuildContent = styled.div`
  width: 100%;
  height: 70%;
  min-height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  ${media.small} {
    flex-direction: column;
  }
`;

const BuildContentImg = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  position: relative;
  bottom: 5vh;
  ${media.small} {
    width: 60%;
    margin: 0px;
  }
`;

const BuildImg = styled.div<{ img?: string }>`
  width: 100%;
  height: 10%;
  min-height: 200px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  ${media.small} {
    min-height: 100px;
  }
`;

const BuildImg2 = styled(BuildImg)`
  margin-top: 5px;
  height: 50%;
  min-width: 400px;
  min-height: 200px;
  background-size: cover;
  ${media.small} {
    min-width: 200px;
    min-height: 100px;
  }
`;

const BuildContentDes = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: left;

  ${media.small} {
    width: 60%;
  }
`;

const BuildLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Land;
