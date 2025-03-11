import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl mb-4">
          notfinancialadvice.com
        </h1>
        <p className="text-gray-600">
          A collection of thoughts and experiences on freedom tech, longevity, and entrepreneurship.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <a href="/getting-started" className="text-black hover:text-gray-600">
            Getting Started with My Blog
          </a>
          <span className="text-sm text-gray-500">  -  March 10, 2024</span>
        </div>

        <div className="flex justify-between items-center">
          <a href="/example-post" className="text-black hover:text-gray-600">
            The Value of Physical Bitcoin Spaces
          </a>
          <span className="text-sm text-gray-500">  -  March 10, 2024</span>
        </div>
      </section>
    </div>
  );
}
