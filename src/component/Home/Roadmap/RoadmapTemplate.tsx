import styled from "styled-components";
import media from "../../../lib/media";

type LineProps = {
  number: number;
  img?: string;
  content?: string[];
  time?: string;
};

const RoadmapTemplate: React.FC<LineProps> = ({
  img,
  content,
  number,
  time,
}) => {
  const Lr = number % 2 === 0 ? "right" : "left";
  return number % 2 === 0 ? (
    <>
      <LineContentlayout>
        <LineTitle>
          <h1>{time}</h1>
        </LineTitle>
        <LineBoxLayout>
          <LineContentDes Lr={Lr}>
            <ul>
              {content?.map((item, i) => (
                <li key={`contentR${i}`}>{item}</li>
              ))}
            </ul>
          </LineContentDes>
        </LineBoxLayout>
      </LineContentlayout>
      <LineContentlayout img={img}></LineContentlayout>
    </>
  ) : (
    <>
      <LineContentlayout>
        <LineTitle>
          <h1>{time}</h1>
        </LineTitle>
        <LineBoxLayout>
          <LineContentDes Lr={Lr}>
            <ul>
              {content?.map((item, i) => (
                <li key={`contentL${i}`}>{item}</li>
              ))}
            </ul>
          </LineContentDes>
        </LineBoxLayout>
      </LineContentlayout>
      <LineContentlayout img={img}></LineContentlayout>
    </>
  );
};

const LineContentlayout = styled.div<{ img?: string }>`
  height: 100%;
  min-height: 300px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;

  ${media.desktop} {
    display: flex;
  }
`;

const LineTitle = styled.div`
  width: 100%;
  display: flex;
  height: 20%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const LineBoxLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

const LineContentDes = styled.div<{ Lr?: string }>`
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
  font-size: 12px;
  z-index: 20;
  ul {
    background-image: ${(props) =>
      `url("image/roadmap/roadmap_content_bg_${props.Lr}.png")`};
    background-position: center;
    background-repeat: no-repeat;
    padding: 3rem 2rem;
  }
  li {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }
`;
const Liner = styled.div<{ Lr?: string }>`
  width: 30%;
  height: 50%;
  background-image: ${(props) =>
    `url("image/roadmap/roadmap_content_line_${props.Lr}.png")`};
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  /* left: ${(props) => (props.Lr === "right" ? "5%" : "-5%")}; */
`;

export default RoadmapTemplate;
