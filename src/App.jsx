import { useState } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Report from "./Report";
import Login from "./Login";

function App() {

  const [page, setPage] =
    useState("home");

  const [isLogin, setIsLogin] =
    useState(false);

  const [dark, setDark] =
    useState(false);

  return (

    <div className={dark ? "dark" : ""}>

      {isLogin ? (

        <div>

          <Navbar
            setPage={setPage}
            dark={dark}
            setDark={setDark}
          />

          {page === "home" &&
            <Home />
          }

          {page === "dashboard" &&
            <Dashboard />
          }

          {page === "report" &&
            <Report />
          }

        </div>

      ) : (

        <Login
          setIsLogin={setIsLogin}
          setPage={setPage}
        />

      )}

    </div>

  );
}

export default App;  