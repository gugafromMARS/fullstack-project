import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import classes from "./Login.module.css";
import { useRef, useState } from "react";
import Registration from "./Registration";
import { LoginRequest } from "./CreateUserRequest";

export default function Login({ userLog }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState();

  const userEmail = useRef();
  const userPassword = useRef();

  function handleRegister() {
    setIsRegistering((prevState) => !prevState);
  }

  async function handleLogin() {
    const userCredentials = {
      userEmail: userEmail.current.value,
      password: userPassword.current.value,
    };

    let canLogin;
    try {
      canLogin = await LoginRequest(userCredentials);
    } catch (error) {
      setError({
        message: error.message || "Failed to Login",
      });
    }
    if (canLogin) {
      userLog();
    }
  }

  if (isRegistering) {
    return <Registration handleRegistration={handleRegister} />;
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button" onClick={handleRegister}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@email.com"
          required
          ref={userEmail}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          ref={userPassword}
        />
        <Button fullWidth mt="xl" onClick={handleLogin}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}