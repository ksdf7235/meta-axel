import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import styled from "styled-components";
import media from "../../lib/media";
import Music from "../Media/music";

function Guide() {
  const MoveTo = () => scroll.scrollTo(0);
  return (
    <GuideLayout>
      <Music />
      <GoLayout>
        <GoTop onClick={MoveTo} />
      </GoLayout>
      <div></div>
    </GuideLayout>
  );
}

const GoLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const GuideLayout = styled.div`
  width: 200px;
  height: 100px;
  position: fixed;
  bottom: 5%;
  right: 2%;
  z-index: 10;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  .rhap_container {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${media.small} {
    width: 50px;
    grid-template-columns: repeat(1, 1fr);
    right: 2%;
    bottom: 8%;
  }
`;

const GoTop = styled.div`
  margin-top: 7px;
  width: 50px;
  min-height: 50px;
  border: 1px solid white;
  border-radius: 50%;
  background-image: url("/image/common/arrow_up.png");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Guide;
