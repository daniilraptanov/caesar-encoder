import React, { FC } from "react";
import { CaesarMode } from "../types/enums/CaesarMode";

interface TabsProps {
  mode: CaesarMode;
  setMode: (value: CaesarMode) => void;
}

const Tabs: FC<TabsProps> = (props) => {
  const activeTabClassName = "active-tab";
  const isEncodingTab = props.mode === CaesarMode.ENCODING;
  const isDecodingTab = props.mode === CaesarMode.DECODING;

  return (
    <div className="tabs">
      <button
        id="encodeTab"
        className={isEncodingTab ? activeTabClassName : ""}
        onClick={() => props.setMode(CaesarMode.ENCODING)}
      >
        Кодувати
      </button>
      <button
        id="decodeTab"
        className={isDecodingTab ? activeTabClassName : ""}
        onClick={() => props.setMode(CaesarMode.DECODING)}
      >
        Декодувати
      </button>
    </div>
  );
};

export default Tabs;
