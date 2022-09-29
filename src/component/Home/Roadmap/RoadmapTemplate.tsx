import styled from "styled-components";
import media from "../../../lib/media";
import sanitizeHTML from "sanitize-html";

type LineProps = {
  number: number;
  img?: string;
  content?: string[];
  time: string;
};

const RoadmapTemplate: React.FC<LineProps> = ({
  img,
  content,
  number,
  time,
}) => {
  const Lr = number % 2 === 0 ? "right" : "left";
  const CleanHtml = sanitizeHTML(time, {
    allowedTags: ["br", "strong"],
  });
  return number % 2 === 0 ? (
    <>
      <LineContentlayout>
        <LineTitle number={number}>
          <h1
            dangerouslySetInnerHTML={{
              __html: CleanHtml,
            }}
          ></h1>
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
        <LineTitle number={number}>
          <h1
            dangerouslySetInnerHTML={{
              __html: CleanHtml,
            }}
          ></h1>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  display: none;

  ${media.desktop} {
    display: ${(props) => (props.img ? "none" : "flex")};
  }
`;

const LineTitle = styled.div<{ number: number }>`
  width: 100%;
  display: flex;
  height: 20%;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media.desktop} {
    justify-content: ${(props) =>
      props.number % 2 === 0 ? "flex-end" : "flex-start"};

    h1 {
      strong {
        color: #46ffff;
        font-weight: 600;
      }
    }
  }
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
