import Head from 'next/head';
import {useQuery} from '@apollo/client';

import BaseLayout from '@components/layout/baseLayout';
import Loader from '@ui/loader';
import ContentInner from '@ui/contentInner';
import Text from '@ui/text';
import CV from '@components/cv';

import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <BaseLayout showThankYou>
      <div className={styles.container}>
        <Head>
          <title>Helgastogova / senior software developer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <CV />
      </div>
    </BaseLayout>
  );
}
