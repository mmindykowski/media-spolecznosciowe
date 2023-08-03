import { useState } from "react";
import "./AddPost.css";
import axios from "axios";

const AddPost = (props) => {
  const [postContent, setPostContent] = useState("");


  // console.log(postContent);


  const addPost = (e) => {
    e.preventDefault();
  };


  return (
    <div className="add-post">
      <form>
        <textarea
          placeholder="Dodaj post..."
          onChange={(e) => setPostContent(e.target.value)}
          value={postContent}
          className="text-content"
        ></textarea>

        <button className="btn addpost">Opublikuj</button>
      </form>
    </div>
  );
};

export default AddPost;
