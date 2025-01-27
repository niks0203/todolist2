import { useState } from "react";
import { NewPost } from "./NewPost";
import Posts from "./Posts";
import { FormFilter } from "./FormFilter";

export function PostList() {
  const [posts, setPosts] = useState([]);
  const [originalPosts, setOriginalPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  function handleFilterOption(filterId) {
    setActiveFilter(filterId);

    if (filterId == "completed" || filterId == "active") {
      let newUpdatedPosts = originalPosts.filter(
        (item) => item.status == filterId
      );
      console.log(newUpdatedPosts);
      setPosts(newUpdatedPosts);
    } else {
      setPosts(originalPosts);
    }
  }

  function createPost(postData) {
    setPosts((prevposts) => [postData, ...prevposts]);
    setOriginalPosts((prevposts) => [postData, ...prevposts]);

    console.log(posts);
  }
  function completePost(postId) {
    setPosts((prevList) => {
      return prevList.map(function (item) {
        if (item.id == postId) {
          console.log("found");
          return { ...item, status: "completed" };
        }
        return item;
      });
    });
    setOriginalPosts((prevOriginalPosts) =>
      prevOriginalPosts.map((item) =>
        item.id === postId ? { ...item, status: "completed" } : item
      )
    );
  }
  function deletePost(postId) {
    setPosts((prevList) => {
      return prevList.filter((item) => item.id != postId);
    });
    setOriginalPosts((prevOriginalList) => {
      return prevOriginalList.filter((item) => item.id != postId);
    });
  }

  return (
    <>
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg flex">
        <div className="left-sidebar w-1/4 p-6 border-r-2 py-20">
          <FormFilter activeOption={handleFilterOption} />
        </div>
        <div className="right-content w-3/4 p-6 pt-5 pb-20">
          <h1 className="text-xl font-bold mb-4">All Tasks</h1>
          <NewPost addPost={createPost} />
          <Posts
            allPosts={posts}
            markComplete={completePost}
            markDelete={deletePost}
          />
        </div>
      </div>
    </>
  );
}
