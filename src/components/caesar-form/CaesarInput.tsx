import React, { ChangeEvent, FC, useState } from "react";
import caesarEncoderServiceFactory from "../../services/CaesarEncoderServiceImpl";
import { CaesarMode } from "../../types/enums/CaesarMode";

interface CaesarInputProps {
  mode: CaesarMode;
  setResultCallback: (result: string) => void;
}

const CaesarInput: FC<CaesarInputProps> = (props) => {
  const [shift, setShift] = useState<number>();
  const [text, setText] = useState<string>("");

  const shiftInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setShift(parseInt(e.target.value));
  };

  const textInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const textProcessingHandler = () => {
    const service = caesarEncoderServiceFactory();
    const result = props.mode === CaesarMode.ENCODING 
      ? service.encode(text, shift)
      : service.decode(text, shift);
    props.setResultCallback(result);
  }

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
      <button 
        id="processButton"
        onClick={textProcessingHandler}
      >Обработать текст</button>
    </>
  );
};

export default CaesarInput;
