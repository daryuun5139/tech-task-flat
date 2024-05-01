import styles from "./Table.module.css";

type Props = {};

const Table = (props: Props) => {
  return (
    <>
      <table className={styles.layout}>
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
        <tbody>
          <tr className={styles.items}>
            <th className={styles.rowlabel} scope="row">
              事務的職業
            </th>
            <td className={styles.data}>19761人</td>
          </tr>
          <tr className={styles.items}>
            <th scope="row" className={styles.rowlabel}>
              運搬・清掃等の職業
            </th>
            <td className={styles.data}>19762人</td>
          </tr>
          <tr className={styles.items}>
            <th scope="row" className={styles.rowlabel}>
              サービスの職業
            </th>
            <td className={styles.data}>19744人</td>
          </tr>
          <tr className={styles.items}>
            <th scope="row" className={styles.rowlabel}>
              販売の職業
            </th>
            <td className={styles.data}>19747人</td>
          </tr>
          <tr className={styles.items}>
            <th scope="row" className={styles.rowlabel}>
              生産工程の職業
            </th>
            <td className={styles.data}>19744人</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
