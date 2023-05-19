import styled from "styled-components";

type pageBodyProps = {
  margin?: string;
};

const PageBody = styled.div<pageBodyProps>`
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default PageBody;
