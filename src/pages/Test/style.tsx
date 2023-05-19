import styled from "styled-components";
import { Container, Input, Typo } from "@components/index";
import { useState } from "react";

type meaningProps = {
  result: boolean;
};

type wordProps = {
  index: number;
  word: wordType;
};

const WordBody = styled(Container)`
  flex-direction: row;
  justify-content: flex-start;
  width: 780px;
  margin: 2px auto;
`;

const Index = styled(Typo)`
  width: 60px;
  font-size: 28px;
  white-space: nowrap;
`;

const WordName = styled(Typo)`
  width: 182px;
  font-size: 28px;
  white-space: nowrap;
`;

const Meaning = styled(Input)<meaningProps>`
  width: 526px;
  height: 30px;
  font-size: 28px;
  border: ${(props) => (props.result ? 0 : "#ff0000 2px solid")};
  border-radius: 0;
  background-color: #f0f0f0;
  padding-left: 10px;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  &::placeholder {
    margin-left: -10px;
    font-size: 20px;
    opacity: 0.5;
  }
`;

function Word({ word, index }: wordProps) {
  const [result, setReult] = useState(true);

  const onMeaningChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const input = e.target.value;
    if (input !== word.meaning) setReult(false);
    if (input === word.meaning) setReult(true);
  };

  return (
    <WordBody id={word.id}>
      <Index>{index}.</Index>
      <WordName>{word.name}</WordName>
      <Meaning result={result} onChange={onMeaningChange} placeholder={`${word.name}'s meaning`} />
    </WordBody>
  );
}

export { Word };
