import { useState } from "react";

const FollowRecommendations = (props) => {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/recommendations")
      .then((res) => {
        setRecommendations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div className="followRecommendation">follows</div>;
};

export default FollowRecommendations;
