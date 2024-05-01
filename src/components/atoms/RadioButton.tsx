import styles from "./RadioButton.module.css";

type Props = {};

const RadioButton = (props: Props) => {
  return (
    <>
      <fieldset className={styles.container}>
        <legend className={styles.title}>表示分類</legend>
        <div className={styles.box}>
          <input
            className={styles.button}
            type="radio"
            id="majorClass"
            name="classification"
            value="majorClass"
            checked
          />
          <label className={styles.label} htmlFor="majorClass">
            職業大分類で見る
          </label>
        </div>
        <div className={styles.box}>
          <input
            className={styles.button}
            type="radio"
            id="middleClass"
            name="classification"
            value="middleClass"
          />
          <label className={styles.label} htmlFor="middleClass">
            職業中分類で見る
          </label>
        </div>
      </fieldset>
    </>
  );
};

export default RadioButton;
