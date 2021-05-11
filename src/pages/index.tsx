import 'emoji-mart/css/emoji-mart.css';

import dynamic from 'next/dynamic';

import { Layout } from '../components/Layout';

const Books = dynamic(() => import('../components/Book/Books'), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <Books />
    </Layout>
  );
}
