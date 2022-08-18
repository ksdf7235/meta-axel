import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";

import Slider from "react-slick";

const Ark: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <ArkLayout>
      <ArkContainer>
        <h1>META AXEL ARK</h1>
        <span>메타엑셀 nft홀더 전용 프라이빗 라운지</span>
      </ArkContainer>
      <ArkSlideLayout>
        <SlideLayout>
          <Slider {...settings}>
            <Box>
              <h3>1</h3>
            </Box>
            <Box>
              <h3>2</h3>
            </Box>
            <Box>
              <h3>3</h3>
            </Box>
            <Box>
              <h3>4</h3>
            </Box>
          </Slider>
        </SlideLayout>
      </ArkSlideLayout>
    </ArkLayout>
  );
};

const ArkContainer = styled.div`
  margin-bottom: 5rem;
`;

const ArkSlideLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  background-color: white;
  color: black;
  width: 200px;
  height: 300px;
  font-size: 66px;
`;
const ArkLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Ark;
