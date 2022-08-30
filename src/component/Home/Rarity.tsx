import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { ArkData, RarityData } from "../../Data/dummy";
import { LittleSpan, TitleH1 } from "../Common/Title";
import RarityPlate from "./Rarity/RarityPlate";
import { LangState } from "../../atoms";

const Rarity: React.FC = () => {
  const [Lang, setLang] = useRecoilState(LangState);
  const { Rarity: rareLang } = selectLang(Lang);
  return (
    <RarityLayout id='rare'>
      <RarityContainer>
        <TitleH1>{rareLang.mainTitle}</TitleH1>
        <RaritySpan>{rareLang.mainBoxTitle}</RaritySpan>
        <RarityGrid>
          {RarityData.map(({ title, content, color, lineColor }, i) => (
            <RarityPlate
              key={`rare${i}`}
              title={title}
              content={content}
              LangContent={rareLang.Content[i]}
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
  ${media.small} {
    grid-template-columns: repeat(1, 1fr);
    min-height: 600px;
  }
`;

const RaritySpan = styled(LittleSpan)`
  width: 30%;
  ${media.small} {
    width: 80%;
  }
`;

const RarityContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Rarity;
