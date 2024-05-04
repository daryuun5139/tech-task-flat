//テーブルUIコンポーネント
import styles from "./style/Table.module.css";

type dataContent = {
  broadCode: string;
  broadName: string;
  middleCode: string;
  middleName: string;
  value: number;
};

type Props = {
  data: dataContent[];
};

const Table = (data: Props) => {
  return (
    <>
      <table className={styles.layout}>
        {/* テーブル見出し------------------------------------------ */}
        <thead className={styles.heading}>
          <tr>
            <th className={`${styles.headinglabel} ${styles.headinglabel01}`} scope="col">
              職業分類名
            </th>
            <th className={`${styles.headinglabel} ${styles.headinglabel02}`} scope="col">
              求人・求職者数
            </th>
          </tr>
        </thead>
        {/* テーブル内容------------------------------------------ */}
        <tbody>
          {data.data.map((item: dataContent, index: number) => {
            return (
              <tr key={index} className={styles.items}>
                <th className={styles.rowlabel} scope="row">
                  {item.broadName}
                </th>
                {/* item.valueにnullがある場合があるので条件分岐を入れる */}
                {item.value != null ? (
                  <td className={styles.data}> {item.value.toLocaleString()}人</td>
                ) : (
                  <td className={styles.data}> {0}人</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
