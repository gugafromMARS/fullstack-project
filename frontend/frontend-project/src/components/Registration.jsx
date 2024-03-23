import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
  NumberInput,
  Text,
  Anchor,
} from "@mantine/core";
import "./Registration.css";
import { useRef, useState } from "react";
import { CreateUserRequest } from "./CreateUserRequest";

export default function Registration({ handleRegistration }) {
  const [error, setError] = useState();

  const name = useRef();
  const address = useRef();
  const age = useRef();
  const email = useRef();
  const password = useRef();

  async function handleCreateUser() {
    const newUser = {
      name: name.current.value,
      address: address.current.value,
      age: age.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      await CreateUserRequest(newUser);
    } catch (error) {
      setError({
        message: error.message || "Failed to create user",
      });
    }

    handleRegistration();
  }

  return (
    <Container className="regis" size={420} my={40}>
      <Title className="white" ta="center">
        Registration
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        If you want to go back,{" "}
        <Anchor size="sm" component="button" onClick={handleRegistration}>
          Cancel
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          ref={name}
          label="Name"
          placeholder="Enter your name"
          required
        />
        <TextInput
          ref={address}
          label="Address"
          placeholder="Address"
          required
        />
        <NumberInput
          ref={age}
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
        />
        <TextInput
          ref={email}
          label="Email"
          placeholder="you@email.com"
          required
        />
        <PasswordInput
          ref={password}
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button onClick={handleCreateUser} fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
