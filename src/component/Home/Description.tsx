import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import { LangState } from "../../atoms";
import media from "../../lib/media";
import { CommonLayout } from "../Common/Layout";
import { CommonH1 } from "../Common/Elements";
import { notReadyClick } from "../../lib/function";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import sanitizeHTML from "sanitize-html";

const Description: React.FC = () => {
  const [Lang, setLang] = useRecoilState(LangState);
  const { Description: DescriptionLang } = selectLang(Lang);
  const [visible, setVisible] = useState(false);
  const cleanedString = sanitizeHTML(DescriptionLang.mainTitle, {
    allowedTags: ["br", "strong"],
  });
  return (
    <DesLayout>
      <ChLayout>
        <ChBtn onClick={notReadyClick} img={"image/common/btn_ch_green.png"} />
        <ChContent>
          <span>卽是空 空卽是色 天上天下 唯我爲尊 要度衆生 生老病.</span>
          <span>卽是空 空卽是色 天上天下 唯我爲尊 要度衆生 生老病.</span>
        </ChContent>
        <ChBtn
          onClick={() =>
            (window.location.href = "https://discord.gg/UxAYWbkXyS")
          }
          img={"image/common/btn_ch_pink.png"}
        ></ChBtn>
      </ChLayout>
      <ContentLayout img={"image/description/des_bg_img.png"}>
        <DesContent>
          <h1
            dangerouslySetInnerHTML={{
              __html: cleanedString,
            }}
          ></h1>
          <DescriptionSpan visible={visible}>
            {DescriptionLang.mainBoxTitle[0]}
          </DescriptionSpan>
          <MoreSpan visible={visible}>
            {DescriptionLang.mainBoxTitle[1]}
          </MoreSpan>
          <ReadMore onClick={() => setVisible((prev) => !prev)}>
            READ MORE
          </ReadMore>
        </DesContent>
      </ContentLayout>
      <NFTContentLayout img={"image/description/layout_bg_red.png"}>
        <NFTLayout img={"image/description/layout_bg.png"}>
          <NftJoinTitle>
            <CommonH1>{DescriptionLang.JoinTitle[0]}</CommonH1>
            <CommonH1>{DescriptionLang.JoinTitle[1]}</CommonH1>
          </NftJoinTitle>
          <JoinBtn
            onClick={() =>
              (window.location.href = "https://discord.gg/UxAYWbkXyS")
            }
          >
            JOIN IN
          </JoinBtn>
        </NFTLayout>
      </NFTContentLayout>
    </DesLayout>
  );
};

const ReadMore = styled.div`
  cursor: pointer;
`;

const DescriptionSpan = styled.span<{ visible?: boolean }>`
  color: gray;
  display: inline-block;
  line-height: 23.2px;
  letter-spacing: -0.015em;
  margin: ${(props) => (props.visible ? "3rem 0px 1rem 0px" : "3rem 0px")};
`;

const MoreSpan = styled(DescriptionSpan)`
  display: ${(props) => (props.visible ? "inline-block" : "none")};
  margin: ${(props) => (props.visible ? "0px" : "3rem 0px")};
  margin-bottom: ${(props) => (props.visible ? "3rem" : "0px")};
`;

const DesContent = styled.div`
  width: 60%;
  h1 {
    font-size: 40px;
    font-weight: 700;

    strong {
      color: #46ffff;
    }
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
  cursor: pointer;

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
  min-height: 100px;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  cursor: pointer;
  a {
    width: 100%;
    height: 100%;
  }
`;
export default Description;
