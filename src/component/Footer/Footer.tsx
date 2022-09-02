import styled from "styled-components";
import media from "../../lib/media";

function Footer() {
  return (
    <FooterL>
      <FooterLayout>
        <Wrapper>
          <img
            width='46px'
            height='55px'
            src='image/common/metaaxel_logo_b.png'
          />
          <span>COPYRIGHT ⓒ Meta Axel. ALL RIGHTS RESERVED</span>
        </Wrapper>
      </FooterLayout>
    </FooterL>
  );
}

const Nav = styled.ul`
  max-width: 1920px;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  font-weight: bold;
`;

const FooterL = styled.footer`
  width: 100%;
  min-height: 120px;
  background-color: ${(props) => props.theme.headerColor};
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterLayout = styled.div`
  width: 62.5%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${media.small} {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    min-width: 46px;
    min-height: 55px;
  }
  span {
    font-size: 12px;
    color: gray;
  }
  ${media.small} {
    padding-left: 5px;
  }
`;

const ImgIcon = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 15px;
  ${media.small} {
    width: 40px;
    height: 40px;
    margin: 0px;
    padding-right: 5px;
  }
`;
export default Footer;
