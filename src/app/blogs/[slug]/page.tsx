import React from "react";
interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ({ params }: Props) {
  const { slug } = await params;
  console.log("slug", slug);
  return <>Blog</>;
}
