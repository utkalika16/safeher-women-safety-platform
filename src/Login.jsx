import { useState } from "react";

function Login(props) {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const loginUser = () => {

    if(email && password){

      alert(
        "Login Successful"
      );

      props.setIsLogin(true);

      props.setPage("home");

    }

    else{

      alert(
        "Enter Login Details"
      );

    }
  };

  return (
    <div className="container">

      <div className="login-card">

        <h1>
          SafeHer Login
        </h1>

        <input
          type="email"
          placeholder="@gmail.com"
          
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button onClick={loginUser}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;