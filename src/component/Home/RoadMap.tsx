import { useRecoilState } from "recoil";
import styled from "styled-components";
import { LangState } from "../../atoms";
import { LineData } from "../../Data/dummy";
import media from "../../lib/media";
import { selectLang } from "../../lib/selectLang";
import { CommonContentDiv } from "../Common/Elements";
import { CommonLayout } from "../Common/Layout";
import RoadmapTemplate from "./Roadmap/RoadmapTemplate";

const RoadMap: React.FC = () => {
  const [Lang, setLang] = useRecoilState(LangState);
  const { RoadMap: RoadMapLang } = selectLang(Lang);
  return (
    <RoadMapLayout id='roadmap'>
      <RoadMapContentLayout>
        <LandTitle>
          <h1>{RoadMapLang.mainTitle}</h1>
        </LandTitle>
        <Line Lang={Lang}>
          {LineData.map(({ img, time, content }, i) => (
            <RoadmapTemplate
              img={img}
              time={time}
              content={RoadMapLang.ContainerContent[i]}
              number={i}
            />
          ))}
        </Line>
      </RoadMapContentLayout>
    </RoadMapLayout>
  );
};

const LandTitle = styled.div`
  display: none;
  ${media.small} {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 40px;
      margin-bottom: 5rem;
    }
  }
`;

const RoadMapLayout = styled(CommonLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div<{ Lang: boolean }>`
  width: 100%;
  min-height: 1200px;
  margin-bottom: 5rem;
  background-image: ${(props) =>
    props.Lang
      ? `url("image/roadmap/roadmap_img_en2.png")`
      : `url("image/roadmap/roadmap_img_ch.png")`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.desktop} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    background-image: url("");
  }
`;
const RoadMapContentLayout = styled.div`
  width: 60%;
`;

export default RoadMap;
