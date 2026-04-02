//import { Component } from "react";
import {client} from "./contentful";

export async function getServices() {
    const res = await client.getEntries({
    content_type: "services",
  }, );
  

  return res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    description: item.fields.description,
   image: item.fields.image?.fields?.file?.url
  ? `https:${item.fields.image.fields.file.url}`
  : null,
  icon: item.fields.icon?.fields?.file?.url
  ? `https:${item.fields.icon.fields.file.url}`
  : null,
     
  }));
}


export async function getProducts() {
  const res = await client.getEntries({
    content_type: "product",
  });

  return res.items.map(item => ({
    id: item.sys.id,
    name: item.fields.name,
    category: item.fields.category,
    price: item.fields.price,
    description: item.fields.description,
    tags: item.fields.tags || [],
     images: Array.isArray(item.fields.images)
      ? item.fields.images
          .filter(img => img?.fields?.file?.url)
          .map(img => `https:${img.fields.file.url}`)
      : [],
  }));
}

// for blog posts cards 
export async function getBlogs() {
  const res = await client.getEntries({
    content_type: "blog",
    order: "-sys.createdAt",
  });

  return res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    excerpt: item.fields.excerpt,
    author: item.fields.author,
    date: item.sys.createdAt,
    slug: item.fields.slug,
    image: item.fields.image?.fields?.file?.url
      ? `https:${item.fields.image.fields.file.url}`
      : null,
  }));
}



// for single blog post page
export async function getSingleBlog(slug) {
  const res = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
   
  });

  const item = res.items[0];

  if (!item) return null;

  return {
    title: item.fields.title,
    author: item.fields.author,
    date: item.sys.createdAt,
    image: item.fields.image?.fields?.file?.url
      ? `https:${item.fields.image.fields.file.url}`
      : null,
    content: item.fields.content, // rich text
  };
}