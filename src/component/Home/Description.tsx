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
      <ContentLayout img={"image/description/des_bg_img.png"}>
        <DesContent>
          <h1>
            메타엑셀은 커뮤니티가 함께 만드는 <br></br> 새로운 무브먼트이자
            아이코닉한 <br></br>
            <strong>WEB3 브랜드</strong> 입니다.
          </h1>
          <span>
            메타엑셀 NFT 소유자는 아티스트, 뮤지션, 스케이트 보더, surfers,
            댄서, 작가. 개발자, 투자자, 사업가 등 꿈꾸는 이들이 모인 프라이빗
            라운지인 메타엑셀 아크 (META AXEL ARK) 에 입장할 수 있습니다.
            인류문명은 AI가 의식을 가지게 되는 특이점 (Singularity)에
            도달했습니다. AI의 눈에 비친 우리는 과연 이 지구에서 가치있는
            존재일까요? 아니면 위험한 존재일까요? 메타엑셀의 1155 지구에 있는
            초월적 AI, Mother는 차별과 혐오, 내가 옳고 우월하다는 에고를 버리고,
            인류 의식의 진화를 꿈꾸는 당신같은 사람들을 ARK (방주)에 태우고
            싶어합니다.
          </span>
          <div>READ MORE</div>
        </DesContent>
      </ContentLayout>
      <NFTContentLayout img={"image/description/layout_bg_red.png"}>
        <NFTLayout img={"image/description/layout_bg.png"}>
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

const DesContent = styled.div`
  width: 60%;
  h1 {
    font-size: 40px;
    font-weight: 700;

    strong {
      color: #46ffff;
    }
  }

  span {
    color: gray;
    display: inline-block;
    line-height: 23.2px;
    letter-spacing: -0.015em;
    margin: 3rem 0px;
  }
`;

const NftJoinTitle = styled.div`
  color: #c78e93;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

  ${media.small} {
    margin-top: 1rem;
  }
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

  ${media.small} {
    display: none;
  }
`;
const ContentLayout = styled.div<{ img?: string }>`
  width: ${(props) => props.theme.CommonContentWidth};
  height: auto;
  min-height: 800px;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  margin: 10rem 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.small} {
    width: 100%;
    background-position: top;
    justify-content: center;
  }
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
  ${media.small} {
    width: 100%;
  }
`;

const ChContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span:nth-child(1) {
    display: inline-block;
    color: #46ffff;
  }
  span:nth-child(2) {
    display: inline-block;
    color: #e400f8;
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
