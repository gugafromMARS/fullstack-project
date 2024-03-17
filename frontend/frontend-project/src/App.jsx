import "./App.css";
import { AuthenticationTitle } from "./components/AuthenticationTitle";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <AuthenticationTitle />
    </MantineProvider>
  );
}

export default App;
