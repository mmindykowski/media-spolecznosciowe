import { useState } from "react";
import "./Post.css";

const Post = (props) => {
  const [likesCount, setLikesCount] = useState(props.post.likes.length);

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
