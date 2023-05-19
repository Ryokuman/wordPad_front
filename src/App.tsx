import { Route, Routes } from "react-router-dom";
import { List, Test, Main } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="test" element={<Test />} />
      <Route path="list" index element={<List />} />
    </Routes>
  );
}

export default App;
