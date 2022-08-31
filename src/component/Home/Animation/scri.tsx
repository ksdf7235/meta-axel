import { useEffect, useState } from "react";
import styled from "styled-components";
import Spritesheet from "react-responsive-spritesheet";

function Scri() {
  const [value, setValue] = useState("");

  return (
    <Ani
      className={"ani"}
      image={"image/common/jamie.png"}
      widthFrame={402}
      heightFrame={602}
      steps={70}
      fps={14}
      loop={true}
      startAt={0}
      endAt={70}
      direction={"forward"}
      backgroundPosition={`center center`}
    />
  );
}

const Ani = styled(Spritesheet)`
  width: 400px;
  height: 600px;
`;

export default Scri;
