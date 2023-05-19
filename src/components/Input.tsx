import styled from "styled-components";

type InputProps = {
  placeholder?: string;
  margin?: string;
  width?: string;
  height?: string;
  fontSize?: string;
};

const Input = styled.input.attrs((props) => ({ placeholder: props.placeholder?.toUpperCase() }))<InputProps>`
  width: ${(props) => props.width || "460px"};
  height: ${(props) => props.height || "100px"};
  margin: ${(props) => props.margin};

  border-radius: 15px;
  border: #ff0000 4px solid;
  background-color: #ffffff;
  justify-content: center;

  font-size: ${(props) => props.fontSize || "100px"};
  font-family: InterBold;

  &::placeholder {
    text-align: center;
  }
`;

export default Input;
