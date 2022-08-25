import styled from "styled-components";
import media from "../../lib/media";

export const CommonH1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 1rem;
  display: inline-block;
  width: 100%;
  min-width: 300px;
  text-align: center;
  ${media.small} {
    width: 60%;
    margin: 0px auto;
    background-position: top;
    justify-content: center;
  }
`;

export const CommonSpan = styled.span`
  display: inline-block;
  text-align: center;
  width: 100%;
  font-weight: 500;
  margin-bottom: 36px;
  line-height: 24px;
  min-width: 520px;
  ${media.small} {
    min-width: 300px;
  }
`;

export const CommonDiv = styled.div`
  z-index: 10;
  width: 50%;
  max-width: ${(props) => props.theme.maxContentWidth};
  ${media.small} {
    margin-top: 5rem;
    width: auto;
  }
`;

export const CommonContentDiv = styled.div`
  width: 62.5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  ${media.small} {
    width: 80%;
    flex-direction: column;
  }
`;

//img

export const DesImg = styled.img`
  width: 50%;
  object-fit: contain;
  position: relative;
  bottom: 10vh;
  ${media.small} {
    position: static;
    width: 100%;
  }
`;

export const ImgIcon = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 15px;
`;

export const ImgIconSm = styled(ImgIcon)`
  width: 40px;
  height: 40px;
  margin-right: 18px;
`;
