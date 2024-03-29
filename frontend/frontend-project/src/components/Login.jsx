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
  const [LoginRefused, setLoginRefused] = useState(false);

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

    let userDto;
    try {
      userDto = await LoginRequest(userCredentials);
    } catch (error) {
      setError({
        message: error.message || "Failed to Login",
      });
    }
    if (userDto) {
      setLoginRefused(false);
      userLog(userDto);
    } else {
      setLoginRefused(true);
    }
  }

  if (isRegistering) {
    return <Registration handleRegistration={handleRegister} />;
  }

  return (
    <Container className={classes.loginStyle} size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="white" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor
          c="white"
          td="underline"
          size="sm"
          component="button"
          onClick={handleRegister}
        >
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {LoginRefused && (
          <Text size="sm" ta="center" mt={5} className={classes.refused}>
            Credentials are wrong.
          </Text>
        )}
        <TextInput
          label="Email"
          placeholder="you@email.com"
          required
          ref={userEmail}
          className={LoginRefused ? classes.loginError : null}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          ref={userPassword}
          className={LoginRefused ? classes.loginError : null}
        />
        <Button fullWidth mt="xl" onClick={handleLogin} color="gray">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
