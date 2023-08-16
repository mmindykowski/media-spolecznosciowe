import { useState } from "react";
import "./Signup.css";
import { Navigate } from "react-router-dom";

const Signup = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setFormData({
      // Spread syntax - kopiuje caly obiekt
      ...formData,
      [name]: target.value,
    });
  };

  // console.log(formData);
  return (
    <div className="signup">
      {props.user && <Navigate to="/" />}
      <form>
        <input
          type="text"
          name="username"
          placeholder="User name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={handleInputChange}
        />
        <button className="btn">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
