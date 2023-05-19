import styled from "styled-components";
import Container from "@components/Container";
import { useNavigate } from "react-router-dom";
import Typo from "@components/Typo";

type BodyProps = {
  margin?: string;
};

type PageProps = {
  margin?: string;
};

const Body = styled(Container)<BodyProps>`
  width: 900px;
  height: 1080px;
  margin: ${(props) => props.margin};
  background-color: #ffffff;
  border: #d9d9d9 4px solid;
`;

const Title = styled(Container)`
  width: 812px;
  height: 134px;
  margin: 30px auto;
  background-color: #d9d9d9;
`;

const Line = styled(Container)`
  width: 812px;
  height: 4px;
  margin-top: 30px;
  background-color: #f3cbcb;
`;

const YLine = styled(Line)`
  width: 4px;
  height: 916px;

  background-color: #f3cbcb;
  margin: 164px 0 0 -400px;
  position: absolute;
`;

const Link = styled(Container)`
  width: 120px;
  height: 68px;
  justify-content: center;
  margin: 224px 0 0 -1028px;
  background-color: #c8d06c;
  position: absolute;
  cursor: pointer;
`;

function Page({ margin }: PageProps) {
  const nav = useNavigate();
  const onLinkClick = () => nav("../", { relative: "route" });

  return (
    <Body margin={margin || "10px auto"}>
      <Link onClick={onLinkClick}>
        <Typo size="32px">HOME</Typo>
      </Link>
      <Title />
      <YLine />
      {Array.from({ length: 25 }, (_, i) => (
        <Line key={i} />
      ))}
    </Body>
  );
}

export default Page;
