import type { NextPage } from 'next';
import Head from 'next/head';

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard - PunkFi</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-cyan-400">Dashboard</h1>
        <p className="text-gray-400">Your assets and positions.</p>
        {/* Placeholder for dashboard content */}
      </div>
    </div>
  );
};

export default Dashboard;
