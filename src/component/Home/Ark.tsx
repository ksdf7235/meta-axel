import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import { LangState } from "../../atoms";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";

const Ark: React.FC = () => {
  return (
    <DesLayout>
      <div>
        <h1>META AXEL ARK</h1>
        <span>메타엑셀 nft홀더 전용 프라이빗 라운지</span>
      </div>
      <div></div>
    </DesLayout>
  );
};

const DesLayout = styled(CommonLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Ark;
