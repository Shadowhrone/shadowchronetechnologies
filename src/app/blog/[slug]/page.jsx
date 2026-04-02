import { getSingleBlog, getBlogs } from "../../../../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { notFound } from "next/navigation";
import ButtonComponent from "./ButtonComponent";

// Custom rendering (images and other elements inside contentful rich text)
const options = {
  renderNode: {
    // Paragraph
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-gray-700 mb-4 leading-relaxed">
        {children}
      </p>
    ),

    // Heading 1
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {children}
      </h1>
    ),

    // Heading 2
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        {children}
      </h2>
    ),

    // Heading 3 (you were missing this)
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
        {children}
      </h3>
    ),

    // Unordered list
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc ml-6 mb-4 space-y-2">
        {children}
      </ul>
    ),

    // List item
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="text-gray-700">
        {children}
      </li>
    ),

    // Embedded images (your original code)
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      return (
        <div className="my-8">
          <img
            src={`https:${file.url}`}
            alt={title}
            className="w-full rounded-xl shadow-sm"
          />
        </div>
      );
    },

    // Hyperlinks
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="text-blue-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
};

// Static params for export
export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    slug: String(blog.slug),
  }));
}

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = await getSingleBlog(slug);


  if (!blog) notFound();
 
  return (
   <div className="bg-gray-100 min-h-screen pt-35 pb-40 px-4">

  {/* Wrapper */}
  <div className=" mx-auto">

    {/* Hero Image */}
    {blog.image && (
      <img
        src={blog.image}
        alt={blog.title}
        className="md:w-[90%] h-[450px] object-cover mx-auto"
      />
    )}

    {/* Content Card (OVERLAPPING) */}
    <div className="relative z-10 -mt-32 md:-mt-40 max-w-[1180px] mx-auto bg-white rounded-xl w-auto md:w-[90%] shadow-lg overflow-hidden">
      
      <div className="p-8">
        
        {/* Meta */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span className="font-medium">{blog.author}</span>
          <span>{new Date(blog.date).toDateString()}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Rich Text */}
        <div >
          {documentToReactComponents(blog.content, options)}
        </div>
        <p className="text-[#48454B] font-semibold pt-4">For more information, purchase and installation..</p>
 <ButtonComponent/>
      </div>
    </div>

  </div>
</div>
  );
}