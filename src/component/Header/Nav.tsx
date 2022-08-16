import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LangState } from "../../atoms";
import { selectLang } from "../../lib/selectLang";
import { SideSheet, Paragraph } from "evergreen-ui";
import { Link } from "react-scroll";
import media from "../../lib/media";
import { useState } from "react";

function Navigation() {
  const [Lang, setLang] = useRecoilState(LangState);
  const [isShown, setIsShown] = useState(false);
  const { HeaderLang } = selectLang(Lang);
  // const ChangeLang = () => {
  //   setLang((prev) => !prev);
  // };
  const Meta = () => {
    alert("Comming soon");
  };

  return (
    <NAVContainer>
      <a href='#'>
        <Link to='Main' spy={true} smooth={true} offset={-80}>
          <li>{HeaderLang[0]}</li>
        </Link>
      </a>
      <a href='#'>
        <li>{HeaderLang[1]}</li>
      </a>
      <a href='#'>
        <Link to='Team' spy={true} smooth={true} offset={-80}>
          <li>{HeaderLang[2]}</li>
        </Link>
      </a>
      <a href='#'>
        <li>{HeaderLang[3]}</li>
      </a>
      <a href='#'>
        <li>{HeaderLang[4]}</li>
      </a>
      <a href='#'>
        <li>{HeaderLang[5]}</li>
      </a>
      <a onClick={Meta}>
        <li>{HeaderLang[6]}</li>
      </a>
    </NAVContainer>
  );
}

const NAVContainer = styled.div`
  display: flex;

  a {
    display: flex;
    text-align: center;
  }
`;
export default Navigation;
