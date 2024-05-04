//セレクトボックスUIコンポーネント
"use client";

import styles from "./style/SelectBox.module.css";
import { years, matters } from "@/lib/optionData";
import { useRecoilState } from "recoil";
import { optionCodesState, optionCodes } from "@/lib/atoms/param-state";
import { ChangeEvent } from "react";
import { prefList } from "@/lib/getData";

type Props = {
  prefList: prefList[];
};

const SelectBox = ({ prefList }: Props) => {
  const [optionCodes, setOptionCodes] = useRecoilState<optionCodes>(optionCodesState);

  //都道府県セレクトハンドラ
  const onChangePref = (event: ChangeEvent<HTMLSelectElement>) => {
    setOptionCodes({ ...optionCodes, prefCode: event.currentTarget.value });
  };

  //年度セレクトハンドラ
  const onChangeYear = (event: ChangeEvent<HTMLSelectElement>) => {
    setOptionCodes({ ...optionCodes, yearCode: event.currentTarget.value });
  };

  //表示内容セレクトハンドラ
  const onChangeMatter = (event: ChangeEvent<HTMLSelectElement>) => {
    setOptionCodes({ ...optionCodes, matterCode: event.currentTarget.value });
  };

  return (
    <div className={styles.selectWrapper}>
      {/* 都道府県セレクトボックス-------------------------------------- */}
      <div className={styles.container}>
        <label className={styles.label} htmlFor="pref-select">
          都道府県
        </label>
        <select className={styles.box} name="pref" id="pref-select" onChange={onChangePref}>
          {prefList.map((item, index) => {
            return (
              <option key={index} value={item.prefCode} className={styles.option}>
                {item.prefName}
              </option>
            );
          })}
        </select>
      </div>
      {/* 年度セレクトボックス-------------------------------------- */}
      <div className={styles.container}>
        <label className={styles.label} htmlFor="year-select">
          年度
        </label>
        <select className={styles.box} name="year" id="year-select" onChange={onChangeYear}>
          {years.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      {/* 表示内容セレクトボックス-------------------------------------- */}
      <div className={styles.container}>
        <label className={styles.label} htmlFor="matter-select">
          表示内容
        </label>
        <select className={styles.box} name="matter" id="matter-select" onChange={onChangeMatter}>
          {matters.map((item, index) => {
            return (
              <option key={index} value={item.code}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
