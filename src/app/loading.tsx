import styles from "./style/loading.module.css";

const Loading = () => {
  return (
    <div className={styles.box}>
      <span className={styles.loader}></span>
      <p className={styles.text}>Loading Now</p>
    </div>
  );
};

export default Loading;
