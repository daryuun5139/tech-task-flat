import styles from "./Table.module.css";

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
            <th className={styles.headinglabel} scope="col">
              職業分類名
            </th>
            <th className={styles.headinglabel} scope="col">
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
                <td className={styles.data}> {item.value}人</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
