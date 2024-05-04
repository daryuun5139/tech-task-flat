//ラジオボタンUIコンポーネント
"use client";

import styles from "./style/RadioButton.module.css";
import { classes } from "@/lib/optionData";
import { useRecoilState } from "recoil";
import { classCodeState } from "@/lib/atoms/param-state";
import { ChangeEvent, useEffect } from "react";

type Props = {};

const RadioButton = (props: Props) => {
  const [classParam, setClassParam] = useRecoilState(classCodeState);

  //表示分類セレクトハンドラ
  const onChangeClass = (event: ChangeEvent<HTMLInputElement>) => {
    setClassParam(event.currentTarget.value);
  };

  //ラジオボタンの先頭項目のみに初期値checkedを与える
  useEffect(() => {
    const element = document.getElementById("0") as HTMLInputElement;
    element!.checked = true;
  }, []);

  return (
    <>
      <fieldset className={styles.radioButtonWrapper} id="radioBox">
        <legend className={styles.title}>表示分類</legend>
        <div className={styles.boxes}>
          {classes.map((item, index) => {
            return (
              <div key={index} className={styles.box}>
                <input
                  className={styles.button}
                  type="radio"
                  id={String(index)}
                  name="classification"
                  value={item.code}
                  onChange={onChangeClass}
                />
                <label className={styles.label} htmlFor={String(index)}>
                  {item.name}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </>
  );
};

export default RadioButton;
