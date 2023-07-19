import axios from "axios";

import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getLatestPosts = () => {
    axios
      .post("http://akademia108.pl/api/social-app/post/latest")
      .then((req) => {
        setPosts(req.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLatestPosts();
  }, []);

  return (
    <div className="home">
      <div className="postList">
        {posts.map((post) => {
          return <h2>{post.content}</h2>;
        })}
      </div>
    </div>
  );
};

export default Home;
