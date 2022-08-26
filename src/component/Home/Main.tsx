import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import { LangState } from "../../atoms";
import media from "../../lib/media";

const Main: React.FC = () => {
  const MintClick = () => {
    alert("comming soon");
  };
  return (
    <MainLayout id='Main'>
      <MainMedia></MainMedia>
      <MainContent>
        <h1>META AXEL PROJECT</h1>
        <MainBtnContainer>
          <MainBtn img={"image/common/btn_green.png"}>
            <a href='https://form.jotform.com/222268943302050'>White list</a>
          </MainBtn>
          <MainBtn img={"image/common/btn_pink.png"}>
            <a onClick={MintClick}>Mint NFT</a>
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

const MainMedia = styled.div`
  margin-top: 15rem;
  width: ${(props) => props.theme.CommonContentWidth};
  height: auto;
  min-height: 600px;
  background-image: url("image/main/main_cha_01.png"),
    url("image/main/bubble_cha.png"), url("image/main/bubble_bg.png");
  background-size: contain, 400px 200px, 400px 200px;
  background-repeat: no-repeat;
  background-position: left, center 30%, right bottom;

  ${media.small} {
    width: 100%;
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
