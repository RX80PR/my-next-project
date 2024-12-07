import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
    return (
        <header className={styles.headrer}>
            <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo.svg"
              alt="SIMPLE"
              className={styles.logo}
              width={348}
              height={133}
              priority
              />
            </Link>
            <nav>
                <ul className={styles.items}>
                    <li>
                      <Link href="/news">メンバー</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}