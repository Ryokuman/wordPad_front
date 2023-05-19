import styled from "styled-components";
import Container from "./Container";
import Typo from "./Typo";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  value?: string;
  margin?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  border?: string;
  scale?: number;
};

const Body = styled(Container)<ButtonProps>`
  width: ${(props) => props.width || "460px"};
  height: ${(props) => props.height || "100px"};
  margin: ${(props) => props.margin};

  border-radius: 15px;
  border: ${(props) => props.border || "#ff0000 6px solid"};
  background-color: #ffffff;
  justify-content: center;

  transform: scale(${(props) => props.scale || 1});
  cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
`;

function Button({ onClick, value, margin, width, height, fontSize, border }: ButtonProps) {
  const typoValue = value?.toUpperCase();

  return (
    <Body margin={margin} onClick={onClick} width={width} height={height} border={border}>
      <Typo size={fontSize || "60px"}>{typoValue}</Typo>
    </Body>
  );
}

export default Button;
