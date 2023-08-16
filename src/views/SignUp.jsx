import './Signup.css'
import {Navigate} from "react-router-dom"

const Signup = (props) => {
  return (
    <div className="signup">
      {props.user && <Navigate to="/"/>}
    <form>
      <input type="text" name="username" placeholder="User name"/>
      <input type="email" name="email" placeholder="E-mail"/>
      <input type="password" name="password" placeholder="Password"/>
      <input type="password" name="confirmPassword" placeholder="Confirm password"/>
      
    </form>
    </div>
  );
};

export default Signup;
