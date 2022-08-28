import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { ArkData, RarityData } from "../../Data/dummy";
import { LittleSpan, TitleH1 } from "../Common/Title";
import RarityPlate from "./Rarity/RarityPlate";

const Rarity: React.FC = () => {
  return (
    <RarityLayout>
      <RarityContainer>
        <TitleH1>RARITY</TitleH1>
        <RaritySpan>
          메타액슬에서 발행되는 모든 NFT에는 향후 제공될 P2E 메타버스에서
          사용가능한 아이템이 최소 1종 탑재되어 있습니다. 희귀도가 높은
          NFT들에게는 메타버스 내 특별한 기능이 부과 됩니다. 또한 각 NFT의
          희귀도에 따라 NXDF 생태계 보상이 달라집니다. 희귀도 계산 공식과 표는
          메타액슬 NFT가 모두 발행 된 이후 별도 페이지에서 공개됩니다.
        </RaritySpan>
        <RarityGrid>
          {RarityData.map(({ title, content, color, lineColor }, i) => (
            <RarityPlate
              key={`rare${i}`}
              title={title}
              content={content}
              color={color}
              lineColor={lineColor}
            />
          ))}
        </RarityGrid>
      </RarityContainer>
    </RarityLayout>
  );
};
const RarityLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RarityGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  width: 60%;
  min-height: 400px;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
`;

const RaritySpan = styled(LittleSpan)`
  width: 30%;
`;

const RarityContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Rarity;
