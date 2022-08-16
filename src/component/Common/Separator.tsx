import styled from "styled-components";

type SeparatorProps = {
  value: string;
};

const SSeparator = styled.div`
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.borderColor};
  }
  span {
    margin: 0px 10px;
    font-weight: 600;
    font-size: 28px;
    color: #b0b0c6;
    font-weight: bold;
    font-stretch: normal;
    font-style: italic;
    line-height: 1.64;
    letter-spacing: -0.84px;
  }
`;

const Separator: React.FC<SeparatorProps> = ({ value }) => {
  return (
    <SSeparator>
      <div></div>
      <span>{value}</span>
      <div></div>
    </SSeparator>
  );
};
export default Separator;
