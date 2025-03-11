export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl mb-8">Blog Posts</h1>

      <div className="space-y-8">
        <article>
          <h2 className="text-2xl mb-2">
            <a href="/blog/getting-started" className="hover:text-gray-600">
              Getting Started with My Blog
            </a>
          </h2>
          <time className="text-sm text-gray-500">March 10, 2024</time>
        </article>

        <article>
          <h2 className="text-2xl mb-2">
            <a href="/blog/example-post" className="hover:text-gray-600">
              Example Post Title
            </a>
          </h2>
          <time className="text-sm text-gray-500">March 10, 2024</time>
        </article>
      </div>
    </div>
  );
} 