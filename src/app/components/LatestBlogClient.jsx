
import Link from "next/link";
import Image from "next/image";
export default function LatestBlogClient({ blogs }) {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-[#1225F5]/10 px-4 py-2 text-sm font-semibold text-[#1225F5]">
            Our Blog
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#021142] md:text-4xl lg:text-5xl">
            Latest From Our Blog
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            Stay updated with the latest technology insights,
            innovations and useful information from our team.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <Link href={`/blog/${blog.slug}`}>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#1225F5] shadow-sm backdrop-blur">
                    Technology
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">

                {/* Author + Date */}
                <div className="flex items-center justify-between gap-3 text-xs font-medium text-gray-400">
                  <span>{blog.author}</span>

                  <span>
                    {new Date(blog.date).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${blog.slug}`}>
                  <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-7 text-[#021142] transition-colors duration-200 group-hover:text-[#1225F5]">
                    {blog.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                  {blog.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-auto pt-6">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1225F5] transition-all duration-200 group-hover:gap-3"
                  >
                    Read More
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="rounded-full bg-[#1225F5] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1225F5]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d1fd1] hover:shadow-xl"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}