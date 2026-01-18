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
