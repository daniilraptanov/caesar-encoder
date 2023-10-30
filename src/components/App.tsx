import React, { FC, useState } from "react";
import { CaesarMode } from "../types/enums/CaesarMode";
import CaesarInput from "./caesar-form/CaesarInput";
import CaesarOutput from "./caesar-form/CaesarOutput";
import Header from "./Header";
import Tabs from "./Tabs";

const App: FC = () => {
  const [mode, setMode] = useState<CaesarMode>(CaesarMode.ENCODING);

  return (
    <>
      <Header />
      <main>
        <Tabs mode={mode} setMode={setMode} />
        <div className="content">
          <CaesarInput />
          <CaesarOutput />
        </div>
      </main>
    </>
  );
};

export default App;
