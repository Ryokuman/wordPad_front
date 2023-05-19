import styled from "styled-components";

type pageBodyProps = {
  margin?: string;
};

const PageBody = styled.div<pageBodyProps>`
  margin: ${(props) => props.margin};
`;

export default PageBody;
