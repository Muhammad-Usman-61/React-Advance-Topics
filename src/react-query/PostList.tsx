import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  // const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const {
    data: posts,
    error,
    isLoading,
  } = usePosts({
    page,
    pageSize,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        id="countries"
        className="w-2/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>All Posts</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-none p-4 mb-4 border">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
        className={
          page === 1
            ? "bg-gray-300 text-white px-4 py-2 rounded mr-2 cursor-not-allowed"
            : "bg-blue-600 text-white px-4 py-2 rounded mr-2"
        }
      >
        Previous
      </button>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </>
  );
};

export default PostList;
