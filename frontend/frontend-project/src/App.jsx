import "./App.css";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  function handleUserLogin(user) {
    handleLogin();
    setUser((prevUser) => {
      return {
        ...prevUser,
        user,
      };
    });
  }

  function handleUserLogout() {
    handleLogin();
    setUser({});
  }

  function handleLogin() {
    setUserLoggedIn((prevState) => !prevState);
  }

  return (
    <MantineProvider>
      {userLoggedIn && (
        <Dashboard userLogout={handleUserLogout} userDto={user} />
      )}
      {!userLoggedIn && <Login userLog={handleUserLogin} />}
    </MantineProvider>
  );
}

export default App;
