import styled from "styled-components";

interface LinearProps {
  readonly right?: boolean;
  readonly reverse?: boolean;
}

export const LinearBg = styled.div<LinearProps>`
  width: 100%;
  height: 200px;
  background: ${(props) =>
    props.right
      ? props.reverse
        ? `linear-gradient(5deg,  ${props.theme.bgColor} 50%,  ${props.theme.bgDarkColor} 50%)`
        : `linear-gradient(-5deg,  ${props.theme.bgColor} 50%,  ${props.theme.bgDarkColor} 50%)`
      : props.reverse
      ? `linear-gradient(-5deg,  ${props.theme.bgDarkColor} 50%,  ${props.theme.bgColor} 50%)`
      : `linear-gradient(5deg,  ${props.theme.bgDarkColor} 50%,  ${props.theme.bgColor} 50%)`};
`;
