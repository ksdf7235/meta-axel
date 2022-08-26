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
        <Link to='build' spy={true} smooth={true} offset={-80}>
          <li>{HeaderLang[0]}</li>
        </Link>
      </a>
      <a href='#'>
        <Link to='land' spy={true} smooth={true} offset={-80}>
          <li>{HeaderLang[1]}</li>
        </Link>
      </a>
      <a href='#'>
        <Link to='chara' spy={true} smooth={true} offset={-80}>
          <li>{HeaderLang[2]}</li>
        </Link>
      </a>
      <a href='#'>
        <li>{HeaderLang[3]}</li>
      </a>
      <a href='#'>
        <Link to='team' spy={true} smooth={true} offset={-80}>
          <li>{HeaderLang[4]}</li>
        </Link>
      </a>
      <a href='#'>
        <Link to='partners' spy={true} smooth={true} offset={-80}>
          <li>{HeaderLang[5]}</li>
        </Link>
      </a>
      <a onClick={Meta}>
        <Link to='roadmap' spy={true} smooth={true} offset={-80}>
          <li>{HeaderLang[6]}</li>
        </Link>
      </a>
    </NAVContainer>
  );
}

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
export default Navigation;
