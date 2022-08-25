import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LangState } from "../../atoms";
import { selectLang } from "../../lib/selectLang";
import { SideSheet, Paragraph, CrossIcon } from "evergreen-ui";
import media from "../../lib/media";
import { useState } from "react";
import Navigation from "./Nav";

const SHeader = styled.header`
  width: 100%;
  height: 120px;
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 5vh;
  z-index: 100;
`;

const HeaderLayout = styled.div`
  z-index: 100;
  width: 50%;
  height: 80px;
  border: 1px solid red;
  border-radius: 10px;
  color: gray;
  opacity: 0.9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${media.desktop} {
    justify-content: center;
  }
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

const Nav = styled.ul`
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  li {
    margin: auto 10px;
  }

  ${media.desktop} {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  width: 25%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const [Lang, setLang] = useRecoilState(LangState);
  const [isShown, setIsShown] = useState(false);
  const [Scroll, setScroll] = useState(true);
  const { HeaderLang } = selectLang(Lang);
  // const ChangeLang = () => {
  //   setLang((prev) => !prev);
  // };

  return (
    <SHeader>
      <HeaderContainer></HeaderContainer>
      <HeaderLayout>
        <Nav>
          <Navigation />
        </Nav>
      </HeaderLayout>
      <HeaderContainer></HeaderContainer>
    </SHeader>
  );
}
export default Header;
