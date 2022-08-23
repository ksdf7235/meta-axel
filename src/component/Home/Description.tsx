import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import { LangState } from "../../atoms";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import { CommonH1 } from "../Common/Elements";

const Description: React.FC = () => {
  return (
    <DesLayout>
      <ChLayout>
        <ChBtn img={"image/common/btn_ch_green.png"} />
        <ChContent>
          <span>卽是空 空卽是色 天上天下 唯我爲尊 要度衆生 生老病.</span>
          <span>卽是空 空卽是色 天上天下 唯我爲尊 要度衆生 生老病.</span>
        </ChContent>
        <ChBtn img={"image/common/btn_ch_pink.png"} />
      </ChLayout>
      <ContentLayout img={"image/description/Des_img.png"}></ContentLayout>
      <NFTContentLayout img={"image/common/layout_red.png"}>
        <NFTLayout>
          <NftJoinTitle>
            <CommonH1>메타엑셀은 NFT 아티스트를 지원합니다.</CommonH1>
            <CommonH1>오늘 NFT 아티스트 길드의 일원이 되세요</CommonH1>
          </NftJoinTitle>
          <JoinBtn>JOIN IN</JoinBtn>
        </NFTLayout>
      </NFTContentLayout>
    </DesLayout>
  );
};

const NftJoinTitle = styled.div`
  color: #c78e93;
`;

const JoinBtn = styled.div`
  margin-top: 2rem;
  width: 200px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("image/common/btn_01.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const DesLayout = styled(CommonLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NFTContentLayout = styled(CommonLayout)<{ img?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
  align-items: center;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: fill;
`;

const ChLayout = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;
const ContentLayout = styled.div<{ img?: string }>`
  width: 60%;
  height: auto;
  min-height: 1200px;
  min-height: 800px;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const NFTLayout = styled.div<{ img?: string }>`
  width: 60%;
  height: auto;
  min-height: 250px;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    display: inline-block;
  }
`;

const ChBtn = styled.div<{ img?: string }>`
  background-color: transparent;
  min-width: 161px;
  padding: 50px;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  color: white;
`;
export default Description;
