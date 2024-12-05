import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
      content: matterResult.content, // Include the raw markdown content for search
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
    content: matterResult.content,
  };
}

// Get all tags sorted by popularity with counts
export function getAllTags() {
  const allPostsData = getSortedPostsData();
  const tagCounts = {};

  // Count occurrences of each tag across all posts
  allPostsData.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });

  // Convert the tagCounts object into an array of [tag, count] and sort by count (popularity)
  const sortedTags = Object.entries(tagCounts).sort(
    ([, countA], [, countB]) => countB - countA,
  );

  return sortedTags.map(([tag, count]) => tag);
}

// Get all tags sorted by popularity with counts
export function getAllTagsWithCounts() {
  const allPostsData = getSortedPostsData();
  const tagCounts = {};

  // Count occurrences of each tag across all posts
  allPostsData.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });

  // Convert the tagCounts object into an array of [tag, count] and sort by count (popularity)
  const sortedTags = Object.entries(tagCounts).sort(
    ([, countA], [, countB]) => countB - countA,
  );

  // Return tags with counts
  // Use with allTags.map(([tag, count]) => (...)
  return sortedTags;
}

// Get posts by tag
export function getPostsByTag(tag) {
  const allPostsData = getSortedPostsData();
  return allPostsData.filter((post) => post.tags && post.tags.includes(tag));
}
