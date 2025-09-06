import type { NextPage } from 'next';
import Head from 'next/head';

const Borrow: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Borrow - PunkFi</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-cyan-400">Borrow</h1>
        <p className="text-gray-400">Borrow assets from the protocol.</p>
        {/* Placeholder for borrow content */}
      </div>
    </div>
  );
};

export default Borrow;
