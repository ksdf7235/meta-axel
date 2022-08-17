import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import { LangState } from "../../atoms";
import media from "../../lib/media";

const Main: React.FC = () => {
  return (
    <MainLayout id='Main'>
      <MainMedia></MainMedia>
      <MainContent>
        <h1>META AXEL PROJECT</h1>
        <MainBtnContainer>
          <MainBtn img={"image/common/btn_green.png"}>White list</MainBtn>
          <MainBtn img={"image/common/btn_pink.png"}>Mint NFT</MainBtn>
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
  color: white;
`;

const MainMedia = styled.div`
  margin-top: 15rem;
  width: 60%;
  height: auto;
  min-height: 600px;
  background-image: url("image/main/main_cha_01.png"),
    url("image/main/bubble_cha.png"), url("image/main/bubble_bg.png");
  background-size: contain, 400px 200px, 400px 200px;
  background-repeat: no-repeat;
  background-position: left, center 30%, right bottom;
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
