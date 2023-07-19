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
  console.log(posts);
  return <h2>Home</h2>;
};

export default Home;
