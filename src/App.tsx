import { Route, Routes } from "react-router-dom";
import { List, Test, Main } from "./pages";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

function App() {
  return (
    <Background>
      <Routes>
        <Route index element={<Main />} />
        <Route path="test" element={<Test />} />
        <Route path="list" index element={<List />} />
      </Routes>
    </Background>
  );
}

export default App;
