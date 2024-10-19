// import { useState } from "react";
import Link from "next/link";
import { getSortedPostsData, getAllTags } from "../lib/posts";

import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostListing from "@/components/PostListing";
import FooterMinimal from "@/components/FooterMinimal";

export default function Home({ allPostsData, allTags }) {
  return (
    <div className="max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8">
      <Header />

      <div
        className="w-full"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-8">
          {allPostsData.map((post) => (
            <PostListing post={post} />
          ))}
        </div>
      </div>

      <hr className="border-1 border-gray-200 dark:border-neutral-700"></hr>

      {/* FOOTER */}
      {/* <Footer allTags={allTags} /> */}
      <FooterMinimal allTags={allTags} />
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allTags = getAllTags();
  return {
    props: {
      allPostsData,
      allTags,
    },
  };
}
