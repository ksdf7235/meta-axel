import styled from "styled-components";
import { LineData } from "../../Data/dummy";
import media from "../../lib/media";
import { CommonContentDiv } from "../Common/Elements";
import { CommonLayout } from "../Common/Layout";
import RoadmapTemplate from "./Roadmap/RoadmapTemplate";

const RoadMap: React.FC = () => {
  return (
    <RoadMapLayout id='roadmap'>
      <RoadMapContentLayout>
        <Line>
          {LineData.map(({ img, time, content }, i) => (
            <RoadmapTemplate
              img={img}
              time={time}
              content={content}
              number={i}
            />
          ))}
        </Line>
      </RoadMapContentLayout>
    </RoadMapLayout>
  );
};

const RoadMapLayout = styled(CommonLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 100%;
  min-height: 1200px;
  background-image: url("image/roadmap/roadmap_img.png");
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
