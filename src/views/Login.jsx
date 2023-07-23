import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <form>
        <input type="text" name="username" placeholder="User name" />
        <input type="password" name="password" placeholder="Password" />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
