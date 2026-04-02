import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="bg-white rounded-xl h-full shadow hover:shadow-lg transition overflow-hidden cursor-pointer">

        {/* Image */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="h-48 w-full object-cover"
          />
        )}

        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>{blog.author}</span>
            <span>{new Date(blog.date).toDateString()}</span>
          </div>

          <h2 className="font-bold text-lg  text-[#48454B] mb-2">
            {blog.title.substring(0, 40)}...
          </h2>

          <p className="text-[#48454B]/70 text-sm line-clamp-3">
            {blog.excerpt.substring(0, 143)}...
          </p>
        </div>
      </div>
    </Link>
  );
}