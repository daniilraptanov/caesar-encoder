import React, { FC } from "react";

interface CaesarOutputProps {
  result: string;
}

const CaesarOutput: FC<CaesarOutputProps> = (props) => {
  return (
    <textarea
      id="outputText"
      placeholder="Результат буде тут"
      value={props.result}
    ></textarea>
  );
};

export default CaesarOutput;
