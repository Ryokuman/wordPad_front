import { Route, Routes, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { List, Test, Main } from "./pages";
import { Page } from "./components";
import { useEffect, useState } from "react";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

function App() {
  const loc = useLocation().pathname;
  const [top, setTop] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (loc === "/") {
      setTop("100px");
      setTitle("wordpad");
      return;
    }
    if (loc === "/test") setTop("-100px");
    if (loc === "/list") setTop("-100px");
    setTitle("");
  }, [loc]);

  return (
    <Background>
      <Page top={top} title={title} />
      <Routes>
        <Route index element={<Main />} />
        <Route path="test" element={<Test />} />
        <Route path="list" index element={<List />} />
      </Routes>
    </Background>
  );
}

export default App;
