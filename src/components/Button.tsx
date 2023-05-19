import styled from "styled-components";
import Container from "./Container";
import Typo from "./Typo";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  value?: string;
  margin?: string;
  scale?: number;
};

const Body = styled(Container)<ButtonProps>`
  width: 460px;
  height: 100px;
  margin: ${(props) => props.margin};

  border-radius: 15px;
  border: #ff0000 6px solid;
  background-color: #ffffff;
  justify-content: center;

  transform: scale(${(props) => props.scale || 1});
  cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
`;

function Button({ onClick, value, margin, scale }: ButtonProps) {
  const typoSize = (scale || 1) * 60;
  const typoValue = value?.toUpperCase();

  return (
    <Body margin={margin} onClick={onClick} scale={scale}>
      <Typo size={`${typoSize}px`}>{typoValue}</Typo>
    </Body>
  );
}

export default Button;
