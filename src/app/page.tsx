import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black space-y-8">
      <h1 className="text-white text-8xl font-bold tracking-wider whitespace-nowrap">
        LEARN BITCOIN
      </h1>
      <div className="flex flex-col items-center space-y-4 text-white text-lg">
        <div className="text-center">
          Getting Started in Bitcoin by Lopp → <a href="https://www.lopp.net/bitcoin-information/getting-started.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">lopp.net/bitcoin-information/getting-started.html</a>
        </div>
        <div className="text-center">
          Bitcoin Stats and Definitions by Clark Moody → <a href="https://bitcoin.clarkmoody.com/dashboard/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">bitcoin.clarkmoody.com/dashboard/</a>
        </div>
        <div className="text-center">
          A daily curated email about Bitcoin → <a href="https://bitcoinpark.com/email" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">bitcoinpark.com/email</a>
        </div>
      </div>
    </div>
  );
}
