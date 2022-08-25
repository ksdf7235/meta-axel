import styled from "styled-components";
import { useRecoilState } from "recoil";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import { BuildData, LandData } from "../../Data/dummy";
import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Build: React.FC = () => {
  return (
    <BuildLayout>
      <BuildContainer
        img={"image/build/build_img.png"}
        smimg={"image/build/build_img_sm.png"}
      >
        <BuildTitle>Building NFTs</BuildTitle>
        <BuildContent>
          <BuildContentDes>
            <BuildArrowUp></BuildArrowUp>
            <BuildContentDiv>
              <h1>community,</h1>
              <h2>커뮤니티를 위한 럭셔리 아파트</h2>
              <span>
                LAND SALE : 세계 최고 수준의 NFT 랜드와 빌딩을 소유하세요
                친구들에게 아지트를 제공하세요 커뮤니티와 서로 돕고 가치를
                공유하고 성장하는 도시부족사회로 회귀 해보세요
              </span>
            </BuildContentDiv>
            <BuildArrowDown></BuildArrowDown>
          </BuildContentDes>
          <BuildContentImg>
            <BuildContentImgDiv>
              <BuildImg img={BuildData[0].img}></BuildImg>
              <BuildImg img={BuildData[1].img}></BuildImg>
            </BuildContentImgDiv>
            <BuildImg2 img={BuildData[2].img}></BuildImg2>
          </BuildContentImg>
        </BuildContent>
      </BuildContainer>
    </BuildLayout>
  );
};

const Box = styled(motion.img)`
  width: 300px;
  object-fit: contain;
  margin: 30px;
  ${media.small} {
    width: 100px;
    min-height: 100px;
  }
`;

const BuildContainer = styled.div<{ img?: string; smimg?: string }>`
  width: ${(props) => props.theme.CommonContentWidth};
  background-image: ${(props) => `url(${props.img})`};
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
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
export default Build;
