import type { NextPage } from 'next';
import Head from 'next/head';

const Deposit: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Deposit - PunkFi</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-cyan-400">Deposit</h1>
        <p className="text-gray-400">Supply assets to the protocol.</p>
        {/* Placeholder for deposit content */}
      </div>
    </div>
  );
};

export default Deposit;
