import { useState } from "react";
import "./AddPost.css";

const AddPost = () => {
  const [postContent, setPostContent] = useState();

  const addPost = () => {
    let post = document.getElementsByClassName("text-content");
    console.log(post.value);
  };

  return (
    <div className="add-post">
      <textarea rows="4" cols="50" className="text-content">
        Napisz co sądzisz...
      </textarea>
      <button className="btn addpost" onClick={addPost}>
        Opublikuj
      </button>
    </div>
  );
};

export default AddPost;
