import styled from "styled-components";
import media from "../../../lib/media";

type LineProps = {
  number: number;
  img?: string;
  content?: string[];
  time?: string;
};

const LineContent: React.FC<LineProps> = ({ img, content, number, time }) => {
  const Lr = number % 2 === 0 ? "right" : "left";
  console.log(Lr);
  return number % 2 === 0 ? (
    <>
      <LineContentlayout>
        <LineTitle>
          <h1>{time}</h1>
        </LineTitle>
        <LineBoxLayout>
          <LineContentDes Lr={Lr}>
            <ul>
              {content?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </LineContentDes>
          <Liner Lr={Lr}></Liner>
        </LineBoxLayout>
      </LineContentlayout>
      <LineContentlayout img={img}></LineContentlayout>
    </>
  ) : (
    <>
      <LineContentlayout img={img}></LineContentlayout>
      <LineContentlayout>
        <LineTitle>
          <h1>{time}</h1>
        </LineTitle>
        <LineBoxLayout>
          <Liner Lr={Lr}></Liner>
          <LineContentDes Lr={Lr}>
            <ul>
              {content?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </LineContentDes>
        </LineBoxLayout>
      </LineContentlayout>
    </>
  );
};

const LineContentlayout = styled.div<{ img?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
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
  height: 80%;
`;

const LineGrid = styled.div`
  width: 100%;
  height: 80%;
  min-height: 960px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const LineContentDes = styled.div<{ Lr?: string }>`
  width: 80%;
  min-width: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) =>
    props.Lr === "right" ? "flex-end" : "flex-start"};
  text-align: right;
  font-size: 12px;
  ul {
    background-image: ${(props) =>
      `url("image/roadmap/roadmap_content_bg_${props.Lr}.png")`};
    background-position: ${(props) =>
      props.Lr === "right" ? "40% 50%" : "60% 50%"};
    background-repeat: no-repeat;
    padding: 3rem 2rem;
  }
  li {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }
`;
const Liner = styled.div<{ Lr?: string }>`
  width: 20%;
  height: 50%;
  background-image: ${(props) =>
    `url("image/roadmap/roadmap_content_line_${props.Lr}.png")`};
  background-position: center;
  background-repeat: no-repeat;
`;

export default LineContent;
