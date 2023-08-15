import "./FollowRecommendations.css";
import axios from "axios";

import { useEffect, useState } from "react";

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

  // po załadowaniu komponoentu

  useEffect(() => {
    getRecommendations();
  }, [props.posts]);

  console.log(recommendations);

  return (
    <div className="followRecommendations">
      {recommendations.map((recommendation) => {
        return (
          <div className="followRecommendation" key={recommendation.id}>
            <img
              src={recommendation.avatar_url}
              alt={recommendation.username}
            />
            <h3>{recommendation.username}</h3>
            <button className="btn">Folow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowRecommendations;
