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

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    let validationErrors = {
      username: false,
      email: false,
      password: false,
      confirmPassword: false,
    };
// trim to usuwanie białych znaków
    if (formData.username.trim().length < 4) {
      validationErrors.username = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          username: "Username should have at least 4 characters",
        };
      });
    } else if (!/^[^\s]*$/.test(formData.username.trim()))

    return !validationErrors.username;
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setFormData({
      // Spread syntax - kopiuje caly obiekt
      ...formData,
      [name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    console.log("wysyłam");
  };

  // console.log(formData);
  return (
    <div className="signup">
      {props.user && <Navigate to="/" />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="User name"
          onChange={handleInputChange}
        />
        {errors.username && <p>{errors.username}</p>}
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
