function Login() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">ChitChat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <button>Sign in</button>
        </form>
        <p>Don't Have an account? Register now</p>
      </div>
    </div>
  );
}

export default Login;
