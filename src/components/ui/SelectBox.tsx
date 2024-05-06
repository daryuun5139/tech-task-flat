//セレクトボックスUIコンポーネント
"use client";

import styles from "./style/SelectBox.module.css";
import { useRecoilState } from "recoil";
import { optionCodesState, optionCodes } from "@/lib/atoms/param-state";
import { ChangeEvent } from "react";

type Props = {
  optionList: { [key: string]: number | string }[];
  name: "都道府県" | "年度" | "表示内容";
};

const SelectBox = ({ optionList, name }: Props) => {
  //Propsのnameの値によって変数を設定する。
  let enName, stateKey;
  switch (name) {
    case "都道府県":
      enName = "pref";
      stateKey = "prefCode";
      break;
    case "年度":
      enName = "year";
      stateKey = "yearCode";
      break;
    case "表示内容":
      enName = "matter";
      stateKey = "matterCode";
      break;
  }

  const [optionCodes, setOptionCodes] = useRecoilState<optionCodes>(optionCodesState);

  //セレクトハンドラ
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOptionCodes({ ...optionCodes, [stateKey]: event.currentTarget.value });
  };

  //セレクトボックスの中身を生成（”年度”とそれ以外で場合分け）
  const options = () => {
    if (optionList) {
      if (enName === "year") {
        return optionList.map((item, index) => {
          return (
            <option key={index} value={item[`${enName}Name`]} className={styles.option}>
              {item[`${enName}Name`]}
            </option>
          );
        });
      } else {
        return optionList.map((item, index) => {
          return (
            <option key={index} value={item[`${enName}Code`]} className={styles.option}>
              {item[`${enName}Name`]}
            </option>
          );
        });
      }
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={`${enName}-select`}>
        {name}
      </label>
      <select className={styles.box} name={`${enName}`} id={`${enName}-select`} onChange={onChange}>
        {options()}
      </select>
    </div>
  );
};

export default SelectBox;
