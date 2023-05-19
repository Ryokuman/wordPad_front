import Button from "@components/Button";
import PageBody from "@components/PageBody";
import { useNavigate } from "react-router-dom";

function Main() {
  const nav = useNavigate();
  const onTestClick = () => nav("test");
  const onListClick = () => nav("list");

  return (
    <PageBody margin="380px auto">
      <Button value="start test" onClick={onTestClick} />
      <Button value="word list" margin="50px 0" onClick={onListClick} />
    </PageBody>
  );
}

export default Main;
