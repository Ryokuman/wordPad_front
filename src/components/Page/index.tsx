import styled from "styled-components";
import Container from "@components/Container";

type BodyProps = {
  margin?: string;
};

type PageProps = {
  margin?: string;
};

const Body = styled(Container)<BodyProps>`
  width: 60vw;
  height: 96vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: ${(props) => props.margin};

  background-color: #ffffff;
  border: #d9d9d9 0.2vw solid;
`;

const Title = styled(Container)`
  width: 56vw;
  height: 10vh;
  margin: 4vh auto;
  background-color: #d9d9d9;
`;

const Line = styled(Container)`
  width: 56vw;
  height: 0.2vh;
  margin-top: 2vh;
  background-color: #f3cbcb;
`;

const YLine = styled(Line)`
  width: 0.2vw;
  height: 82vh;

  background-color: #f3cbcb;
  margin: 14vh 0 0 -20vw;
  position: absolute;
`;

function Page({ margin }: PageProps) {
  return (
    <Body margin={margin || "10px auto"}>
      <Title />
      <YLine />
      {Array.from({ length: 34 }, (_, i) => (
        <Line key={i} />
      ))}
    </Body>
  );
}

export default Page;
