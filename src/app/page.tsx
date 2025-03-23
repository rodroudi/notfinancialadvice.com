import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 py-8">
      <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider text-center mb-8">
        LEARN BITCOIN
      </h1>
      <div className="flex flex-col items-center space-y-6 text-white text-sm md:text-lg max-w-full">
        <div className="text-center flex flex-wrap justify-center">
          Getting Started in Bitcoin by Lopp → <a href="https://www.lopp.net/bitcoin-information/getting-started.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors break-words">lopp.net/bitcoin-information/getting-started.html</a>
        </div>
        <div className="text-center flex flex-wrap justify-center">
          Bitcoin Stats and Definitions by Clark Moody → <a href="https://bitcoin.clarkmoody.com/dashboard/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors break-words">bitcoin.clarkmoody.com/dashboard/</a>
        </div>
        <div className="text-center flex flex-wrap justify-center">
          A Daily Curated Email About Bitcoin → <a href="https://bitcoinpark.com/email" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors break-words">bitcoinpark.com/email</a>
        </div>
      </div>
    </div>
  );
}
