import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>テクノロジーで世界を変える</h1>
      <p className={styles.description}>
        私たちは市場をリードしているグローバルテックカンパニーです。
      </p>
    </div>
  );
}