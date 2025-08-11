const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li>
          {" "}
          <a href="https://prabinsinghthakuri.com.np">Home</a>
        </li>
        <li>
          {" "}
          <a href="https://prabinsinghthakuri.com.np">Contact</a>
        </li>
        <li>
          {" "}
          <a href="https://prabinsinghthakuri.com.np">Location</a>
        </li>
        <li>
          {" "}
          <a href="https://prabinsinghthakuri.com.np">About</a>
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
