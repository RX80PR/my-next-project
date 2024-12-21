import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import styles from "./page.module.css";


export default async function Page() {
    const date = await getMembersList();
  return (
      <div className={styles.container}>
        {date.contents.length === 0 ? (
          <p className={styles.empty}>メンバーが登録されていません。</p>
        ) : (
          <ul>
            {date.contents.map((member) => (
              <li key={member.id} className={styles.list}>
                <Image
                  src={member.image.url}
                  alt=""
                  width={member.image.width}
                  height={member.image.height}
                  className={styles.image}
                />
                <dl>
                  <dt className={styles.name}>{member.name}</dt>
                  <dd className={styles.position}>{member.position}</dd>
                  <dd className={styles.profile}>{member.profile}</dd>
                </dl>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}