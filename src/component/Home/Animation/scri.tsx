import { useEffect, useState } from "react";
import styled from "styled-components";
import Spritesheet from "react-responsive-spritesheet";
import media from "../../../lib/media";

function Scri() {
  const Width = window.innerWidth;
  const [play, setPlay] = useState(Width < 768 ? true : false);
  if (Width < 768) {
    console.log(play);
  }
  return (
    <Ani
      className={"ani"}
      image={"image/common/jamie.png"}
      widthFrame={402}
      heightFrame={602}
      steps={70}
      fps={14}
      autoplay={play}
      loop={true}
      startAt={0}
      endAt={70}
      direction={"forward"}
      backgroundPosition={`center center`}
      onMouseOver={(spritesheet) => {
        spritesheet.play();
      }}
      onMouseLeave={(spritesheet) => {
        if (Width > 768) spritesheet.pause();
      }}
    />
  );
}

const Ani = styled(Spritesheet)`
  width: 500px;
  .react-responsive-spritesheet-container {
    position: relative;
    top: 10%;
  }

  :hover {
    .react-responsive-spritesheet-container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 600px !important;
      ${media.small} {
        width: auto !important;
      }
    }
    .react-responsive-spritesheet-container__move {
      scale: 1.1;

      ${media.small} {
        scale: 1;
      }
    }
  }
`;

export default Scri;
