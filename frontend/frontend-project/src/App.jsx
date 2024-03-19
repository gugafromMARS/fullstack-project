import "./App.css";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { useState } from "react";
import Login from "./components/Login";
import NavbarSegmented from "./components/NavbarSegmented";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  function handleLogin() {
    setUserLoggedIn(true);
  }

  return (
    <MantineProvider>
      {userLoggedIn && <NavbarSegmented />}
      {!userLoggedIn && <Login userLog={handleLogin} />}
    </MantineProvider>
  );
}

export default App;
