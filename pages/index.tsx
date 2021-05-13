import Head from 'next/head';
import Link from 'next/link';

import Layout, {siteTitle} from '../components/layout';
import Date from '../components/date';

import {getSortedPostsData} from '../lib/posts';
import {GetStaticProps} from 'next';

export default function Home({
  data,
}: {
  data: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {data.map(({id, date, title}) => (
        <div key={id}>
          <Link href={`/posts/${id}`}>
            <a>
              {title} | <Date dateString={date} />
            </a>
          </Link>
        </div>
      ))}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = getSortedPostsData();
  return {
    props: {
      data,
    },
  };
};
