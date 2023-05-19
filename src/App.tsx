import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<div>hello</div>} />
    </Routes>
  );
}

export default App;
