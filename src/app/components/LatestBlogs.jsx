import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "../../../lib/api";
import LatestBlogClient from "./LatestBlogClient";

export default async function LatestBlog() {
  const blogs = await getBlogs();

  const latestBlogs = [...blogs]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    )
    .slice(0, 3);

  return <LatestBlogClient blogs={latestBlogs} />;
}