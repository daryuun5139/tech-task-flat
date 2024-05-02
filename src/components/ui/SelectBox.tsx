"use client";

import styles from "./SelectBox.module.css";
import { years, prefectures, matters } from "@/lib/optionData";
import { useRecoilState } from "recoil";
import { prefCodeState, yearCodeState, matterCodeState } from "@/lib/atoms/param-state";
import { ChangeEvent } from "react";

type Props = {};

const SelectBox = (props: Props) => {
  const [prefParam, setPrefParam] = useRecoilState(prefCodeState);
  const [yearParam, setYearParam] = useRecoilState(yearCodeState);
  const [matterParam, setMatterParam] = useRecoilState(matterCodeState);

  //都道府県セレクトハンドラ
  const onChangePref = (event: ChangeEvent<HTMLSelectElement>) => {
    setPrefParam(event.currentTarget.value);
  };

  //年度セレクトハンドラ
  const onChangeYear = (event: ChangeEvent<HTMLSelectElement>) => {
    setYearParam(event.currentTarget.value);
  };

  //表示内容セレクトハンドラ
  const onChangeMatter = (event: ChangeEvent<HTMLSelectElement>) => {
    setMatterParam(event.currentTarget.value);
  };

  return (
    <>
      {/* 都道府県セレクトボックス-------------------------------------- */}
      <div className={styles.container}>
        <label className={styles.label} htmlFor="pref-select">
          都道府県
        </label>
        <select className={styles.box} name="pref" id="pref-select" onChange={onChangePref}>
          {prefectures.map((item, index) => {
            return (
              <option key={index} value={item.code}>
                {item.name}
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
    </>
  );
};

export default SelectBox;
