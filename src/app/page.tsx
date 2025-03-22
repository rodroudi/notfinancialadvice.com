import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black space-y-8">
      <h1 className="text-white text-8xl font-bold tracking-wider whitespace-nowrap">
        LEARN BITCOIN
      </h1>
      <div className="flex flex-col items-center space-y-4 text-white text-lg">
        <a 
          href="https://www.lopp.net/bitcoin-information/getting-started.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          Getting started by Lopp
        </a>
        <a 
          href="https://bitcoin.clarkmoody.com/dashboard/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          Stats and definitions by Clark Moody's dashboard
        </a>
        <a 
          href="https://bitcoinpark.com/email" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          A daily curated email about Bitcoin, consider subscribing to Bitcoin Park's OP_Return email here
        </a>
      </div>
    </div>
  );
}
