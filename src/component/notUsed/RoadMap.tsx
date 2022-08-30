import styled from "styled-components";
import { LineData } from "../../Data/dummy";
import media from "../../lib/media";
import { CommonContentDiv } from "../Common/Elements";
import { CommonLayout } from "../Common/Layout";
import LineContent from "./Roadmap/LineContent";

const RoadMap: React.FC = () => {
  return (
    <RoadMapLayout id='roadmap'>
      <RoadMapContentLayout>
        <Line>
          <LineGrid>
            {LineData.map(({ img, time, content }, i) => (
              <LineContent
                key={`roadmap${i}`}
                number={i}
                img={img}
                time={time}
                content={content}
              />
            ))}
          </LineGrid>
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

const LineGrid = styled.div`
  width: 100%;
  height: 80%;
  min-height: 960px;
  display: grid;
  gap: -10px;
  grid-template-columns: repeat(2, 1fr);
`;

const Liner = styled.div`
  width: 20%;
  height: 50%;
  background-image: url("image/roadmap/roadmap_content_line_left.png");
  background-position: center;
  background-repeat: no-repeat;
`;

const Line = styled.div`
  width: 100%;
  min-height: 1200px;
  background-image: url("image/roadmap/roadmap_line.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RoadMapContentLayout = styled.div`
  width: 60%;
`;

export default RoadMap;
