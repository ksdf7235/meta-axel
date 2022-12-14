import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import { LangState } from "../../atoms";
import media from "../../lib/media";
import Animation from "./Animation/Animation";
import Scri from "./Animation/scri";
import Header from "../Header/Header";
import Chat from "./Chat/Chat";
import { Link } from "react-scroll";

const Main: React.FC = () => {
  const [Lang, setLang] = useRecoilState(LangState);
  const MintClick = () => {
    window.location.href = `https://premint.metaaxel.online/?lang=${
      Lang ? "ko" : "en"
    }`;
  };
  return (
    <MainLayout id='Main'>
      <Header />
      <MainMedia Lang={Lang}>
        <Scri />
        <Chat />
      </MainMedia>
      <MainContent>
        <h1>META-AXEL PROJECT</h1>
        <MainBtnContainer>
          <MainBtn img={"image/common/btn_green.png"}>
            <a
              href={
                Lang
                  ? "https://form.jotform.com/221965247305053"
                  : "https://form.jotform.com/222268943302050"
              }
            >
              White list
            </a>
          </MainBtn>
          <MainBtn img={"image/common/btn_pink.png"}>
            <Link to='pre' spy={true} smooth={true}>
              <span>Mint NFT</span>
            </Link>
          </MainBtn>
        </MainBtnContainer>
      </MainContent>
    </MainLayout>
  );
};

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;
  position: relative;
  h1 {
    font-size: 60px;
    font-weight: bold;

    ${media.small} {
      display: none;
    }
  }

  ${media.small} {
    width: 100%;
  }
`;

const MainBtnContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MainBtn = styled.div<{ img?: string }>`
  background-color: transparent;
  padding: 50px;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  color: white;
  cursor: pointer;
  ${media.small} {
    padding: 20px;
  }
`;

const MainMedia = styled.div<{ Lang: boolean }>`
  margin-top: 1rem;
  width: ${(props) => props.theme.CommonContentWidth};
  height: auto;
  min-height: 600px;
  background-image: ${(props) =>
    props.Lang
      ? `url("image/main/bubble_cha_en.png");`
      : `url("image/main/bubble_cha.png")`};
  background-size: 400px 200px;
  background-repeat: no-repeat;
  background-position: 60% 50%;
  ${media.small} {
    background-image: none !important;
    width: 100%;
    flex-direction: column;
  }
  ${media.desktop} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: ${(props) =>
      props.Lang
        ? `url("image/main/bubble_cha_en.png");`
        : `url("image/main/bubble_cha.png")`};
    background-size: 400px 200px;
    background-position: right;
    min-height: 800px;
    margin: 10px;
  }
`;

const MainLayout = styled.div`
  background-image: url("image/main/main_bg.png");
  width: 100%;
  display: flex;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Main;
