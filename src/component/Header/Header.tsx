import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LangState, isShow } from "../../atoms";
import { selectLang } from "../../lib/selectLang";
import { SideSheet, Paragraph, CrossIcon } from "evergreen-ui";
import media from "../../lib/media";
import { useState, useRef, useEffect } from "react";
import Navigation from "./Nav";
import { useTransform, useScroll, motion, useMotionValue } from "framer-motion";

function Header() {
  const [Lang, setLang] = useRecoilState(LangState);
  const [isShown, setIsShown] = useRecoilState(isShow);
  const [Scroll, setScroll] = useState(true);
  const { HeaderLang } = selectLang(Lang);
  // const ChangeLang = () => {
  //   setLang((prev) => !prev);
  // };
  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState(0);
  const [isZero, setZero] = useState(false);
  const opacity = useTransform(scrollYProgress, [1, 0.01, 0], [0, 0, 0.9]);
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollY(latest);
      if (latest !== scrollY) {
        setZero(false);
      }
      if (latest === 0) {
        setZero(true);
      }
    });
  }, [setZero, setScrollY]);
  const NAVContainer = styled.div`
    display: flex;

    a {
      display: flex;
      text-align: center;
      :hover {
        color: white;
      }
    }
  `;
  return (
    <SHeader>
      <HeaderContainerLeft>
        <img src='/image/common/meta_axel_logo.png' />
      </HeaderContainerLeft>
      <HeaderLayout isZero={isZero}>
        <Nav>
          <NAVContainer>
            <Navigation />
          </NAVContainer>
        </Nav>
      </HeaderLayout>
      <HeaderContainerRight>
        <Hamburger
          isShown={isShown}
          onClick={() => {
            setIsShown((prev) => !prev);
          }}
        />
        <SideSheet
          position={"right"}
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
      </HeaderContainerRight>
    </SHeader>
  );
}

const SideContainer = styled.div`
  position: fixed;
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.headerColor};
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
const Hamburger = styled.div<{ isShown: boolean }>`
  display: none;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) =>
    props.isShown
      ? `url("/image/header/nav-close.png")`
      : `url("/image/header/nav-hamburger.png")`};
  ${media.desktop} {
    display: block;
    cursor: pointer;
  }
`;
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
  ${media.desktop} {
    height: 80px;
    top: 0;
    padding: 0px;
    background-color: #000000;
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

const HeaderLayout = styled(motion.div)<{ isZero: boolean }>`
  z-index: 100;
  height: 80px;
  border: 1px solid red;
  border-radius: 10px;
  color: gray;
  opacity: ${(props) => (props.isZero ? 0.9 : 0)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${media.desktop} {
    width: 0px;
    justify-content: flex-start;
    visibility: hidden;
  }
  :hover {
    opacity: 1;
  }
`;

const HeaderContainerLeft = styled.div`
  width: 25%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    visibility: hidden;
  }
  ${media.desktop} {
    width: 80%;
    padding: 20px;
    justify-content: flex-start;
    background: linear-gradient(
      180deg,
      rgba(210, 53, 64, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 51.52%,
      rgba(210, 53, 64, 0.2) 100%
    );
    img {
      visibility: visible;
      min-width: 98px;
      min-height: 42px;
    }
  }
`;
const HeaderContainerRight = styled.div`
  width: 25%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${media.desktop} {
    width: 20%;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(210, 53, 64, 0.3) 0%,
      rgba(210, 53, 64, 0.3) 100%
    );
  }
`;

export default Header;
