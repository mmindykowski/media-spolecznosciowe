import { useState } from "react";
import "./AddPost.css";

const AddPost = () => {
  const [textarea, setTextarea] = useState("Napisz coś");

  const handleChange = (e) => {
    setTextarea(e.target.value);
    console.log(textarea);
  };

  return (
    <div className="add-post">
      <form action="">
        <textarea
          value={textarea}
          onChange={handleChange}
          rows="4"
          cols="50"
          className="text-content"
        ></textarea>
        <button className="btn addpost">Opublikuj</button>
      </form>
    </div>
  );
};

export default AddPost;
