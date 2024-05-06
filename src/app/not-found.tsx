import Image from "next/image";
import styles from "./not-found.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Bad Request</h2>
      <Image src="/not-found-img.png" width={400} height={300} alt="not-found-img" />
      <p className={styles.text}>
        間違ったパラメータが設定されました。
        <br />
        最初からやりなおしをお願いします。
      </p>
      <Link href="/" className={styles.link}>
        Home
      </Link>
    </div>
  );
}
