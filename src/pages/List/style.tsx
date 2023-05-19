import styled from "styled-components";
import { Button, Container, Input, Typo } from "@components/index";
import { useAppDispatch } from "@stores/store";
import wordsSlice from "@stores/wordsSlice";

type wordProps = {
  index: number;
  word: wordType;
};

const AddBody = styled(Container)`
  width: 800px;
  margin-top: 104px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const AddInput = styled(Input)`
  padding-left: 20px;
  width: 200px;
  height: 40px;
  font-size: 32px;
  &::placeholder {
    margin-left: 20px;
  }
`;

const WordBody = styled(Container)`
  flex-direction: row;
  justify-content: flex-start;
  width: 780px;
  margin-top: 10px;
`;

const Index = styled(Typo)`
  width: 60px;
  font-size: 24px;
  white-space: nowrap;
`;
const WordName = styled(Typo)`
  width: 240px;
  font-size: 24px;
  white-space: nowrap;
`;
const Meaning = styled(Typo)`
  font-size: 24px;
  white-space: nowrap;
`;

function Word({ word, index }: wordProps) {
  const dispatch = useAppDispatch();
  const onDelClick = () => dispatch(wordsSlice.actions.deleteWord(word));

  return (
    <WordBody>
      <Index>{index}.</Index>
      <WordName>{word.name}</WordName>
      <Meaning>{word.meaning}</Meaning>
      <Button
        margin="auto 0 auto auto"
        border="#ff0000 2px solid"
        width="20px"
        height="20px"
        value="x"
        fontSize="10px"
        onClick={onDelClick}
      />
    </WordBody>
  );
}

export { AddBody, AddInput, Word };
