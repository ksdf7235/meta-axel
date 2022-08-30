import styled from "styled-components";
import media from "../../../lib/media";

type RareProps = {
  title?: string;
  content: string[];
  LangContent: string;
  color?: string;
  lineColor: string;
};

const RarityPlate: React.FC<RareProps> = ({
  title,
  content,
  color,
  LangContent,
  lineColor,
}) => {
  return (
    <RarityPlateLayout color={color} lineColor={lineColor}>
      <RarityTitle>
        <h1>{title}</h1>
      </RarityTitle>
      <RarityElement color={color}>
        <span>{content[0]}</span>
      </RarityElement>
      <RarityElement color={color}>
        <span>{LangContent}</span>
      </RarityElement>
    </RarityPlateLayout>
  );
};

const RarityPlateLayout = styled.div<{ color?: string; lineColor: string }>`
  background: ${(props) =>
    `linear-gradient(
    180deg,
    ${props.color} 0%,
    rgba(0, 0, 0, 0.2) 50%,
    ${props.color} 100%
  )`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${(props) => `1px solid ${props.lineColor}`};
  box-shadow: ${(props) => `0px 4px 44px ${props.color}`};
`;

const RarityElement = styled.div<{ color?: string }>`
  width: 90%;
  height: 20%;
  background-color: ${(props) => props.color};
  border-radius: 30px;
  padding: 0px 10px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;
const RarityTitle = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  align-items: center;
  margin: 1rem 0px;
`;

export default RarityPlate;
