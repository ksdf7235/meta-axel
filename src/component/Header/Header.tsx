import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LangState } from "../../atoms";
import { selectLang } from "../../lib/selectLang";
import { SideSheet, Paragraph, CrossIcon } from "evergreen-ui";
import media from "../../lib/media";
import { useState, useRef, useEffect } from "react";
import Navigation from "./Nav";
import { useTransform, useScroll, motion, useMotionValue } from "framer-motion";

function Header() {
  const scrollRef = useRef(null);
  const y = useMotionValue(0);
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

  return (
    <SHeader>
      <HeaderContainer></HeaderContainer>
      <HeaderLayout isZero={isZero}>
        <Nav>
          <Navigation />
        </Nav>
      </HeaderLayout>
      <HeaderContainer></HeaderContainer>
    </SHeader>
  );
}
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

const HeaderLayout = styled(motion.div)<{ isZero: boolean }>`
  z-index: 100;
  width: 50%;
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
    justify-content: center;
  }
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

export default Header;
