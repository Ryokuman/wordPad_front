import { v4 } from "uuid";
import { useState } from "react";
import Button from "@components/Button";
import PageBody from "@components/PageBody";

import { AddBody, AddInput, Word } from "./style";
import { useAppDispatch, useAppSelector } from "@stores/store";
import wordsSlice from "@stores/wordsSlice";

function List() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.word);

  const onAddClick = () => {
    if (word && meaning) {
      const newWord: wordType = { id: v4(), name: word, meaning: meaning };
      dispatch(wordsSlice.actions.addWord(newWord));
      setWord("");
      setMeaning("");
    }
  };

  const onWordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setWord(e.target.value);
  const onMeaningChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setMeaning(e.target.value);

  return (
    <PageBody margin="0 auto">
      <AddBody>
        <AddInput placeholder="word" value={word} onChange={onWordChange} />
        <AddInput placeholder="meaning" value={meaning} onChange={onMeaningChange} />
        <Button
          width="240px"
          height="40px"
          fontSize="32px"
          value="add word"
          onClick={onAddClick}
          border="#ff0000 4px solid"
        />
      </AddBody>
      {words.map((e, i) => (
        <Word key={i} index={i + 1} word={e} />
      ))}
    </PageBody>
  );
}

export default List;
