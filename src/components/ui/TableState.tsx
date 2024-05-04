//テーブル上部の現在の選択状態表示コンポーネント
import styles from "./style/TableState.module.css";

type Props = {
  prefName: string;
  year: string;
  matter: string;
};

const TableState = ({ prefName, year, matter }: Props) => {
  //matterの番号に応じてswitchでテキストに変換。
  switch (matter) {
    case "1":
      matter = "有効求職者数（総数）";
      break;
    case "2":
      matter = "有効求職者数（男性）";
      break;
    case "3":
      matter = "有効求職者数（女性）";
      break;
    case "4":
      matter = "有効求人数";
      break;
    case "5":
      matter = "就職件数";
      break;
  }

  return (
    <>
      <div className={styles.tableState}>
        {/* 現在の都道府県の選択状態---------------------------- */}
        <div className={styles.box}>
          <span className={styles.label}>都道府県</span>
          <h2 className={styles.title}>{prefName}</h2>
        </div>
        {/* 現在の年度の選択状態---------------------------- */}
        <div className={styles.box}>
          <span className={styles.label}>年度</span>
          <h2 className={`${styles.title} ${styles.year}`}>{year}</h2>
        </div>
        {/* 現在の表示内容の選択状態---------------------------- */}
        <div className={styles.box}>
          <span className={styles.label}>表示内容</span>
          <h2 className={styles.title}>{matter}</h2>
        </div>
      </div>
    </>
  );
};

export default TableState;
