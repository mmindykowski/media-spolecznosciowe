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
    } else if (!/^[^\s]*$/.test(formData.username.trim())) {
      validationErrors.username = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          username: "Username should'n have empty characters",
        };
      });
    } else {
      validationErrors.username = false;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          username: "",
        };
      });
    }

    // E-mail

    if (
      !/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(
        formData.email.trim()
      )
    ) {
      validationErrors.email = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: "There is no valid email",
        };
      });
    } else {
      validationErrors.email = false;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          email: "",
        };
      });
    }

    // Password

    if (formData.password.trim().length < 6) {
      validationErrors.password = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          password: "Password should have ar leasr 6 characters",
        };
      });
    } else if (!/^[^\s]*$/.test(formData.password.trim())) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          password: "Password should have empty characters",
        };
      });
    } else if (
      !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password.trim())
    ) {
      validationErrors.password = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          password: "Password mus t contain one of charts: ! # @ $ % ",
        };
      });
    } else {
      validationErrors.password = false;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          password: "",
        };
      });
    }

    // Confirm password

    if (formData.password.trim() !== formData.confirmPassword.trim()) {
      validationErrors.confirmPassword = true;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          confirmPassword: "Passwords should be the same",
        };
      });
    } else {
      validationErrors.confirmPassword = false;
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          confirmPassword: "",
        };
      });
    }

    return (
      !validationErrors.username &&
      !validationErrors.email &&
      !validationErrors.password &&
      !validationErrors.confirmPassword
    );
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
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={handleInputChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button className="btn">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
