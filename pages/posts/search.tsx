import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSortedPostsData, getAllTags } from "../../lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostListing from "@/components/PostListing";
export default function SearchResults({ allPostsData, allTags }) {
  const router = useRouter();
  const { query } = router.query;
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Search posts by title, tags, and body
  function searchPosts(allPostsData, query) {
    return allPostsData.filter((post) => {
      const content =
        `${post.title} ${post.tags?.join(" ")} ${post.content}`.toLowerCase();
      return content.includes(query.toLowerCase());
    });
  }

  useEffect(() => {
    if (query) {
      // Use the client-side search function to filter posts based on the query
      const searchResults = searchPosts(allPostsData, query);
      setFilteredPosts(searchResults);
    }
  }, [query, allPostsData]);

  return (
    <div className="max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8">
      <Header />

      <hr className="border-4"></hr>

      <div
        className="w-full"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <h1>Search Results</h1>
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-8">
          {/* Display filtered posts */}
          {filteredPosts.length > 0 ? (
            <>
              {filteredPosts.map((post) => (
                <PostListing post={post} />
              ))}
            </>
          ) : (
            <p>No posts found for the search term "{query}".</p>
          )}
        </div>
      </div>

      <hr className="border-4"></hr>

      {/* FOOTER */}
      <Footer allTags={allTags} />
    </div>
  );
}

// Fetch posts statically for client-side search functionality
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
