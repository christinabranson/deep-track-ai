// import { useState } from "react";
import Link from "next/link";
import { getAllTags } from "../../lib/posts";

import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostListing from "@/components/PostListing";

export default function AllTagsPage({ allTags }) {
  return (
    <div className="max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8">
      <Header />

      <hr className="border-4"></hr>

      <div>
        <h4 className="font-semibold ">Popular tags:</h4>
        <p>
          {allTags.map((tag) => (
            <span key={tag}>
              <Link href={`/tags/${tag}`}>{tag}</Link>
              {"   "}
            </span>
          ))}
        </p>
      </div>

      <hr className="border-4"></hr>

      {/* FOOTER */}
      <Footer allTags={allTags} />
    </div>
  );
}

export async function getStaticProps() {
  const allTags = getAllTags();
  return {
    props: {
      allTags,
    },
  };
}
