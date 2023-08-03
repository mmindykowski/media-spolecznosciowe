import { useState } from "react";
import "./AddPost.css";

const AddPost = (props) => {
  // const [textarea, setTextarea] = useState("Napisz coś");

  // const handleChange = (e) => {
  //   setTextarea(e.target.value);
  //   console.log(textarea);
  // };

  return (
    <div className="add-post">
      <form>
        <textarea
          placeholder="Dodaj post..."
          className="text-content"
        ></textarea>

        <button className="btn addpost">Opublikuj</button>
      </form>
    </div>
  );
};

export default AddPost;
