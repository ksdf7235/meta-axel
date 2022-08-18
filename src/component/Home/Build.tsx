import styled from "styled-components";
import { useRecoilState } from "recoil";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";

const Build: React.FC = () => {
  return (
    <BuildLayout>
      <BuildContainer img={"image/build/build_img.png"}>
        <BuildTitle>Bullding NFTs</BuildTitle>
        <BuildContent>
          <BuildContentDes>
            <button>위</button>
            <div>
              <h1>community,</h1>
              <h2>커뮤니티를 위한 럭셔리 아파트</h2>
              <span>
                LAND SALE : 세계 최고 수준의 NFT 랜드와 빌딩을 소유하세요
                친구들에게 아지트를 제공하세요 커뮤니티와 서로 돕고 가치를
                공유하고 성장하는 도시부족사회로 회귀 해보세요
              </span>
            </div>
            <button>아래</button>
          </BuildContentDes>
          <BuildContentImg>
            <BuildImg></BuildImg>
            <BuildImg></BuildImg>
            <BuildImg2></BuildImg2>
          </BuildContentImg>
        </BuildContent>
      </BuildContainer>
      <BuildContainer img={"image/build/land_bg.png"}></BuildContainer>
    </BuildLayout>
  );
};

const LandLayout = styled.div``;

const BuildTitle = styled.div`
  margin-top: 4rem;
  width: 90%;
  height: 10%;
  min-height: 100px;
  font-weight: 700;
  font-size: 30px;
`;
const BuildContent = styled.div`
  width: 90%;
  height: 90%;
  min-height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BuildContentImg = styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-left: 1rem;
`;

const BuildImg = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 100px;
  background-color: white;
`;

const BuildImg2 = styled(BuildImg)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const BuildContentDes = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BuildContainer = styled.div<{ img?: string }>`
  width: 60%;
  background-image: ${(props) => `url(${props.img})`};
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const BuildLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Build;
