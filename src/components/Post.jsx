import { useState } from "react";
import "./Post.css";

import axios from "axios";

const Post = (props) => {
  const [likesCount, setLikesCount] = useState(props.post.likes.length);

  const deletePost = (id) => {
    axios
      .post("https://akademia108.pl/api/social-app/post/delete", {
        post_id: id,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="post">
      <div className="avatar">
        <img src={props.post.user.avatar_url} alt={props.post.user.username} />
      </div>
      <div className="postData">
        <div className="postMeta">
          <div className="author">{props.post.user.username}</div>
          <div className="date">{props.post.created_at.substring(0, 10)}</div>
        </div>
        <div className="postContent">
          {" "}
          <div className="author">{props.post.content}</div>
        </div>
        <div className="likes">
          {/* Uzytkownik przestał istniec (null albo undefined) wiec uzywamy operatora znaku zapytania, zeby nie wywalalo bledu jak bedzie uzytkownik wylogowany   */}

          {props.user?.username === props.post.user.username && (
            <button className="btn">Usuń</button>
          )}
          {likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
