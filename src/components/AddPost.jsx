import "./AddPost.css";

const AddPost = () => {
  return (
    <div className="add-post">
      <textarea rows="4" cols="50" className="text-content">Napisz co sądzisz...</textarea>
      <button className="btn addpost">Opublikuj</button>
    </div>
  );
};

export default AddPost;
