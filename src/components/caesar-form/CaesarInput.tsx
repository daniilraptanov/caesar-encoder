import React, { ChangeEvent, FC, useState } from "react";

interface CaesarInputProps {}

const CaesarInput: FC<CaesarInputProps> = (props) => {
  const [shift, setShift] = useState<number>();
  const [text, setText] = useState<string>("");

  const shiftInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setShift(parseInt(e.target.value));
  };

  const textInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <textarea
        id="inputText"
        placeholder="Введите текст"
        onChange={textInputHandler}
      ></textarea>
      <input
        type="number"
        id="shiftInput"
        placeholder="Сдвиг (по умолчанию 3)"
        onChange={shiftInputHandler}
      />
      <button id="processButton">Обработать текст</button>
    </>
  );
};

export default CaesarInput;
