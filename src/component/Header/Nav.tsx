import styled from "styled-components";
import { useRecoilState } from "recoil";
import { LangState, isShow } from "../../atoms";
import { selectLang } from "../../lib/selectLang";
import { SideSheet, Paragraph } from "evergreen-ui";
import { Link } from "react-scroll";
import media from "../../lib/media";
import { useState } from "react";

function Navigation() {
  const [Lang, setLang] = useRecoilState(LangState);
  const [isShown, setIsShown] = useRecoilState(isShow);
  const { HeaderLang } = selectLang(Lang);
  const ChangeLang = () => {
    setLang((prev) => !prev);
  };
  const ChangeShow = () => {
    const width = window.innerWidth;
    if (width < 1200) setIsShown((prev) => !prev);
  };
  const Meta = () => {
    alert("Comming soon");
  };

  return (
    <>
      <a href='#'>
        <Link
          onClick={ChangeShow}
          to='build'
          spy={true}
          smooth={true}
          offset={-80}
        >
          <li>{HeaderLang[0]}</li>
        </Link>
      </a>
      <a href='#'>
        <Link
          onClick={ChangeShow}
          to='land'
          spy={true}
          smooth={true}
          offset={-80}
        >
          <li>{HeaderLang[1]}</li>
        </Link>
      </a>
      <a href='#'>
        <Link
          onClick={ChangeShow}
          to='chara'
          spy={true}
          smooth={true}
          offset={-80}
        >
          <li>{HeaderLang[2]}</li>
        </Link>
      </a>
      <a href='#'>
        <Link
          onClick={ChangeShow}
          to='rare'
          spy={true}
          smooth={true}
          offset={-80}
        >
          <li>{HeaderLang[3]}</li>
        </Link>
      </a>
      <a href='#'>
        <Link
          onClick={ChangeShow}
          to='team'
          spy={true}
          smooth={true}
          offset={-80}
        >
          <li>{HeaderLang[4]}</li>
        </Link>
      </a>
      <a href='#'>
        <Link
          onClick={ChangeShow}
          to='partners'
          spy={true}
          smooth={true}
          offset={-80}
        >
          <li>{HeaderLang[5]}</li>
        </Link>
      </a>
      <a onClick={Meta}>
        <Link
          onClick={ChangeShow}
          to='roadmap'
          spy={true}
          smooth={true}
          offset={-80}
        >
          <li>{HeaderLang[6]}</li>
        </Link>
      </a>
      <a onClick={ChangeLang}>
        <li>{Lang ? "KR" : "EN"}</li>
      </a>
    </>
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
