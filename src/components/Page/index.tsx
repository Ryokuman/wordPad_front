import styled from "styled-components";
import Container from "@components/Container";
import { useNavigate } from "react-router-dom";
import Typo from "@components/Typo";

type PageProps = {
  top?: string;
  left?: string;
  title?: string;
};

const Body = styled(Container)<PageProps>`
  width: 900px;
  height: 1080px;

  top: ${(props) => props.top};
  left: ${(props) => props.left};
  margin-left: ${(props) => (props.left === "0" ? "auto" : "")};
  right: ${(props) => (props.left === "0" ? "0" : "")};
  margin-right: ${(props) => (props.left === "0" ? "auto" : "")};

  position: absolute;
  background-color: #ffffff;
  border: #d9d9d9 4px solid;

  z-index: -1;
`;

const Title = styled(Container)`
  width: 812px;
  height: 134px;
  margin: 30px auto;
  justify-content: center;
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

function Page({ title, top, left }: PageProps) {
  const nav = useNavigate();
  const onLinkClick = () => nav("../", { relative: "route" });
  const titleValue = title?.toUpperCase();

  return (
    <Body top={top} left={left || "0"}>
      <Link onClick={onLinkClick}>
        <Typo size="32px">HOME</Typo>
      </Link>
      <Title>
        <Typo size="100px">{titleValue}</Typo>
      </Title>
      <YLine />
      {Array.from({ length: 25 }, (_, i) => (
        <Line key={i} />
      ))}
    </Body>
  );
}

export default Page;
