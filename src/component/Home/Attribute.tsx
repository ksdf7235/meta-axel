import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { ArkData } from "../../Data/dummy";
import { LittleSpan, TitleH1 } from "../Common/Title";

const Attribute: React.FC = () => {
  return (
    <ArkLayout>
      <ArkContainer>
        <TitleH1>META AXEL ARK</TitleH1>
        <LittleSpan>메타엑셀 nft홀더 전용 프라이빗 라운지</LittleSpan>
      </ArkContainer>
    </ArkLayout>
  );
};
const ArkLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ArkContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Attribute;
