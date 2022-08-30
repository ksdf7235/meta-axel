import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import Slider from "react-slick";
import { LittleSpan, TitleH1 } from "../Common/Title";
import AttrPlate from "./Attr/AttrPlate";
import { LangState } from "../../atoms";

const Attribute: React.FC = () => {
  const [Lang, setLang] = useRecoilState(LangState);
  const { Attr: attrLang } = selectLang(Lang);
  return (
    <AttrLayout>
      <AttrContainer>
        <TitleH1>{attrLang.mainTitle}</TitleH1>
      </AttrContainer>
      <AttrGrid>
        <AttrPlate />
      </AttrGrid>
    </AttrLayout>
  );
};

const AttrGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  width: 60%;
  min-height: 600px;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);

  ${media.small} {
    width: 80%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AttrLayout = styled(CommonLayout)`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AttrContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Attribute;
