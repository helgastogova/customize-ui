import Head from 'next/head';
import {useQuery} from '@apollo/client';

import BaseLayout from '@components/layout/baseLayout';
import Loader from '@ui/loader';
import ContentInner from '@ui/contentInner';
import Text from '@ui/text';

import Wizard from '@components/wizard';

import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <Head>
          <title>Helgastogova</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Text size="48" align="center">
          Hi 👋 ! Nice to see you! <br />
          I'm Olga Stogova.
        </Text>
      </div>
    </BaseLayout>
  );
}
