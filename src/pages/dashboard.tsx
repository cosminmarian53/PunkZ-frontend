import type { NextPage } from 'next';
import Head from 'next/head';

const Dashboard: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Dashboard - PunkFi</title>
      </Head>
      <div className="max-w-7xl mx-auto p-6 pt-10 md:pt-16">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 mb-2">
            Dashboard
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full"></div>
        </div>

        <p className="mt-4 text-fuchsia-200/70 text-xl">
          Your assets and positions.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards with neon styling */}
          <div className="bg-black/40 backdrop-blur-sm border border-fuchsia-900/30 p-6 rounded-xl hover:shadow-[0_0_15px_rgba(217,70,219,0.3)] transition-all duration-300">
            <h3 className="text-xl font-medium text-fuchsia-300 mb-3">
              Total Supplied
            </h3>
            <p className="text-3xl font-bold text-white">$0.00</p>
            <div className="mt-4 h-1 w-full bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-full"></div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-fuchsia-900/30 p-6 rounded-xl hover:shadow-[0_0_15px_rgba(217,70,219,0.3)] transition-all duration-300">
            <h3 className="text-xl font-medium text-fuchsia-300 mb-3">
              Total Borrowed
            </h3>
            <p className="text-3xl font-bold text-white">$0.00</p>
            <div className="mt-4 h-1 w-full bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-full"></div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-fuchsia-900/30 p-6 rounded-xl hover:shadow-[0_0_15px_rgba(217,70,219,0.3)] transition-all duration-300">
            <h3 className="text-xl font-medium text-fuchsia-300 mb-3">
              Net APY
            </h3>
            <p className="text-3xl font-bold text-white">0.00%</p>
            <div className="mt-4 h-1 w-full bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-full"></div>
          </div>
        </div>

        {/* Connect wallet CTA for new users */}
        <div className="mt-10 p-8 bg-gradient-to-r from-fuchsia-900/20 to-purple-900/20 rounded-xl border border-fuchsia-800/30 text-center">
          <h2 className="text-2xl font-bold text-fuchsia-100">
            Connect Your Wallet to Get Started
          </h2>
          <p className="mt-2 text-fuchsia-200/70">
            Connect your wallet to view your personalized dashboard and start
            using PunkFi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
