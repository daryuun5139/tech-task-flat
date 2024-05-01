import styles from "./SelectBox.module.css";

type Props = {};

const SelectBox = (props: Props) => {
  return (
    <>
      {/* 都道府県セレクトボックス-------------------------------------- */}
      <div className={styles.container}>
        <label className={styles.label} htmlFor="pref-select">
          都道府県
        </label>
        <select className={styles.box} name="pref" id="pref-select">
          <option value="hk">北海道</option>
          <option value="ao">青森</option>
          <option value="ak">秋田</option>
          <option value="iw">岩手</option>
          <option value="mg">宮城</option>
          <option value="ym">山形</option>
        </select>
      </div>
      {/* 年度セレクトボックス-------------------------------------- */}
      <div className={styles.container}>
        <label className={styles.label} htmlFor="year-select">
          年度
        </label>
        <select className={styles.box} name="year" id="year-select">
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
        </select>
      </div>
      {/* 表示内容セレクトボックス-------------------------------------- */}
      <div className={styles.container}>
        <label className={styles.label} htmlFor="matter-select">
          表示内容
        </label>
        <select className={styles.box} name="matter" id="matter-select">
          <option value="jobSeeker_all">有効求職者数（総数）</option>
          <option value="jobSeeker_m">有効求職者数（男性）</option>
          <option value="jobSeeker_fm">有効求職者数（女性）</option>
          <option value="jobOpening">有効求人数</option>
          <option value="employNum">就職件数</option>
        </select>
      </div>
    </>
  );
};

export default SelectBox;
