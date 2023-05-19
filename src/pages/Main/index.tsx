import Page from "@components/Page";
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";

function Main() {
  const nav = useNavigate();
  const onTestClick = () => nav("test");
  const onListClick = () => nav("list");

  return (
    <div>
      <Button value="start test" margin="380px auto 0 auto" onClick={onTestClick} />
      <Button value="word list" margin="50px auto 0 auto" onClick={onListClick} />
    </div>
  );
}

export default Main;
