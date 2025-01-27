import classes from "./Posts.module.css";
import Image from "next/image";

function Posts({ allPosts, markComplete, markDelete }) {
  function handleCheckedPost(event) {
    console.log(event.target.id);
    markComplete(event.currentTarget.parentNode.id);
    event.currentTarget.disabled = "true";
  }
  function handleDeletePost(event) {
    markDelete(event.currentTarget.parentNode.id);
  }
  return (
    <ul className="todolist-entries">
      {allPosts.map((post) => (
        <li key={post.id} className={post.status} id={post.id}>
          <div className="flex items-center flex-1" id={post.id}>
            <input
              type="checkbox"
              id={post.id}
              onClick={handleCheckedPost}
              className="w-5 h-5 text-red-400 focus:ring-red-400"
              checked={post.status == "completed" ? "true" : ""}
              disabled={post.status == "completed" ? "true" : ""}
            />
            <span className="todobody ml-3 text-gray-700">{post.body}</span>
          </div>
          <span onClick={handleDeletePost}>
            <Image
              src={`/delete-icon.png`}
              alt="deleteicon"
              width="20"
              height="20"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
export default Posts;
