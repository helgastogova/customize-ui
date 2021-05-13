import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello app</title>
        <meta name="description" content="My app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      hello
    </div>
  );
}
