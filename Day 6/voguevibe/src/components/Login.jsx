import { useState } from "react";

function Login({ setIsLoggedIn }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(username && password){
      setIsLoggedIn(true);
      alert("Login Successful!");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)}
      />
      <input 
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;