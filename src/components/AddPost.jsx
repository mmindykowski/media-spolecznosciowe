import { useState } from "react";
import "./AddPost.css";
import axios from "axios";

const AddPost = (props) => {
  const [postContent, setPostContent] = useState("");

  // console.log(postContent);

  const addPost = (e) => {
    e.preventDefault();

    if (!postContent) {
      return;
    }

    axios
      .post("https://akademia108.pl/api/social-app/post/add", {
        content: postContent,
      })
      .then((res) => {
        props.getPrevPosts();
        setPostContent('')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="add-post">
      <form onSubmit={addPost}>
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
