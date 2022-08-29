import styled from "styled-components";
import { BuildData } from "../../../Data/dummy";
import media from "../../../lib/media";

type BulildProps = {
  img: string[];
  title: string[];
  des?: string;
};

const BuildPlate: React.FC<BulildProps> = ({ img, title, des }) => {
  return (
    <BuildContent>
      <BuildContentDes>
        <BuildContentDiv>
          <h1>{title[0]}</h1>
          <h2>{title[1]}</h2>
          <span>{des}</span>
        </BuildContentDiv>
      </BuildContentDes>
      <BuildContentImg>
        <BuildContentImgDiv>
          <BuildImg img={`${img[0]}`}></BuildImg>
          <BuildImg img={`${img[1]}`}></BuildImg>
        </BuildContentImgDiv>
        <BuildImg2 img={`${img[2]}`}></BuildImg2>
      </BuildContentImg>
    </BuildContent>
  );
};

const BuildContentImgDiv = styled.div`
  display: flex;
  min-width: 400px;
  height: 50%;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    margin-right: 5px;
  }
  ${media.desktop} {
    min-width: 200px;
  }
`;

const BuildArrowUp = styled.button`
  width: 40px;
  height: 30px;
  background: no-repeat url("/image/common/arrow_up.png");
  border: none;
  ${media.small} {
    display: none;
  }
`;
const BuildArrowDown = styled(BuildArrowUp)`
  background: no-repeat url("/image/common/arrow_down.png");
`;

const BuildContentDiv = styled.div`
  margin: 5rem 0px;

  h1 {
    font-size: 40px;
    color: #d23540;
    font-weight: 700;
  }
  h2 {
    margin: 1rem 0px;
    font-size: 20px;
    font-weight: 700;
  }
  span {
  }
  ${media.desktop} {
    margin: 3rem 0px;
  }
`;

const BuildContent = styled.div`
  width: 100%;
  height: 70%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.desktop} {
    height: auto;
    flex-direction: column;
  }
`;

const BuildContentImg = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  ${media.desktop} {
    width: 60%;
    margin: 0px;
  }
`;

const BuildImg = styled.div<{ img?: string }>`
  width: 100%;
  height: 10%;
  min-height: 200px;
  background-image: ${(props) => `url(${props.img})`};
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  ${media.small} {
    min-height: 100px;
  }
`;

const BuildImg2 = styled(BuildImg)`
  margin-top: 5px;
  height: 50%;
  min-width: 400px;
  min-height: 200px;
  background-size: cover;
  ${media.small} {
    min-width: 200px;
    min-height: 100px;
  }
`;

const BuildContentDes = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: left;

  ${media.desktop} {
    width: 60%;
  }
`;

export default BuildPlate;
