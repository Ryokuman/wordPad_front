import PageBody from "@components/PageBody";
import { Word } from "./style";
import { useAppSelector } from "@stores/store";
import Button from "@components/Button";

function Test() {
  const words = useAppSelector((state) => state.word);
  const onSubmitClick = () => {};

  return (
    <PageBody margin="0 auto">
      <Button
        margin="2px auto 36px auto"
        width="220px"
        height="50px"
        value="submit"
        fontSize="32px"
        border="#ff0000 4px solid"
        onClick={onSubmitClick}
      />
      {words.map((e, i) => (
        <Word word={e} key={i} index={i + 1} />
      ))}
    </PageBody>
  );
}

export default Test;
