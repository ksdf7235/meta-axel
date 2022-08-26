import styled from "styled-components";
import media from "../../lib/media";
import { CommonContentDiv } from "../Common/Elements";
import { CommonLayout } from "../Common/Layout";

const RoadMap: React.FC = () => {
  return (
    <RoadMapLayout id='roadmap'>
      <RoadMapContentLayout>
        <Line />
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
`;
const RoadMapContentLayout = styled.div`
  width: 60%;
`;

export default RoadMap;
