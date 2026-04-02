import { getBlogs } from "../../../lib/api";
import BlogCard from "../components/BlogCard";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <>
    <div className="w-full bg-[#1225F5]/5 text-black lg:h-auto pt-40 pb-10 md:px-20 px-5">
  <h1 className="text-center text-3xl pt-4 font-semibold ">Technology</h1>
  <h2 className="text-center text-xl text-black font-medium pt-4 ">The New Language of Ease, Access and Empowerment</h2>
  <p className="text-center pt-4 text-[#000000]/70 xl:w-[60%]  mx-auto ">In the symphony of modern life, technology plays the role of both conductor and composer guiding our rhythms, shaping our experiences, and redefining what it means to live with ease and control. Gone are the days when tech was reserved for the elite or the highly trained. Today, it’s a universal tool, designed to be inclusive, intuitive and deeply personal.</p>
    </div>
    <div className="max-w-6xl mx-auto  py-10 grid md:grid-cols-3 gap-6 items-stretch">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
    </>
  );
}