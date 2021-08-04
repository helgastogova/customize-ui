import Head from 'next/head';
import {useQuery} from '@apollo/client';

import BaseLayout from '@components/layout/baseLayout';

import Wizard from '@components/wizard';

import QUERY_COUNTRIES from './queryCountries.graphql';

import styles from '../styles/home.module.css';

export default function Home() {
  const {data, loading, error} = useQuery(QUERY_COUNTRIES);
  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>:( an error happened</p>;
  }

  return (
    <BaseLayout>
      <div className={styles.container}>
        <Head>
          <title>Customize UI</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Wizard />
      </div>
    </BaseLayout>
  );
}
