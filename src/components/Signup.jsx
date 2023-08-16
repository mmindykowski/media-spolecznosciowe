const Signup = () => {
  return (
    <div className="signup">
      <form type="text" name="username" placeholder="User name"></form>
      <form type="email" name="email" placeholder="User e-mail"></form>
      <form type="password" name="password" placeholder="Password"></form>
      <form
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
      ></form>
    </div>
  );
};

export default Signup;
