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
import classes from "./AuthenticationTitle.module.css";
import { useState } from "react";
import Registration from "./Registration";

export function AuthenticationTitle() {
  const [isRegistering, setIsRegistering] = useState(false);

  function handleRegister() {
    setIsRegistering((prevState) => !prevState);
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
        <TextInput label="Email" placeholder="you@email.com" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
