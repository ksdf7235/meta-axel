import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectLang } from "../../lib/selectLang";
import { LangState } from "../../atoms";
import media from "../../lib/media";
import { SideSheet, Paragraph, CrossIcon } from "evergreen-ui";
import Navigation from "./Nav";
import { useState } from "react";

const Hamberger: React.FC = () => {
  const [Lang, setLang] = useRecoilState(LangState);
  const [isShown, setIsShown] = useState(false);
  const [Scroll, setScroll] = useState(true);
  const { HeaderLang } = selectLang(Lang);
  return (
    <>
      <Hamburger
        onClick={() => {
          setIsShown((prev) => !prev);
          setScroll((prev) => !prev);
          console.log(Scroll);
        }}
      />
      <SideSheet
        position={"left"}
        isShown={isShown}
        width={"100%"}
        shouldCloseOnEscapePress={true}
        shouldCloseOnOverlayClick={false}
        preventBodyScrolling={false}
      >
        <SideContainer>
          <HamburgerNav>
            <Navigation />
          </HamburgerNav>
        </SideContainer>
      </SideSheet>
    </>
  );
};

const Hamburger = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/image/header/nav-hamburger.png");
  ${media.desktop} {
    display: block;
    cursor: pointer;
  }
`;
const HamburgerNav = styled.ul`
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: ${(props) => props.theme.headerColor};

  li {
    margin: 30px auto;
  }
`;

const SideContainer = styled.div`
  position: fixed;
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.headerColor};
`;

export default Hamberger;
