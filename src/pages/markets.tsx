import type { NextPage } from 'next';
import Head from 'next/head';

const Markets: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Markets - PunkFi</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-cyan-400">Markets</h1>
        <p className="text-gray-400">Available assets to supply and borrow.</p>
        {/* Placeholder for markets content */}
      </div>
    </div>
  );
};

export default Markets;
