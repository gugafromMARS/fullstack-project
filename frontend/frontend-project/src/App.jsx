import "./App.css";
import { AuthenticationTitle } from "./components/AuthenticationTitle";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
// import NavbarSegmented from "./components/NavbarSegmented";

function App() {
  return (
    <MantineProvider>
      {/* <NavbarSegmented /> */}
      <AuthenticationTitle />
    </MantineProvider>
  );
}

export default App;
