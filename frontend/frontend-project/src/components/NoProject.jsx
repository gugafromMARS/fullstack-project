import { Paper, Text, Button, Modal, TextInput } from "@mantine/core";
import "@mantine/dates/styles.css";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import "./NoProject.css";
import { useRef } from "react";

export default function NoProject({ text, btn, createProject, userDto }) {
  const [opened, { open, close }] = useDisclosure(false);

  const name = useRef();
  const date = useRef();
  const description = useRef();
  const userEmail = userDto.user.email;

  function handleCloseCreation() {
    close();
  }

  function handleOpenCreation() {
    open();
  }

  function handleCreation() {
    const newProject = {
      name: name.current.value,
      date: date.current.value,
      description: description.current.value,
      userEmail: userEmail,
    };
    createProject(newProject);
    close();
  }

  return (
    <>
      <Modal className="modal" opened={opened} onClose={handleCloseCreation}>
        <Modal.Title className="title-pop">Add Project</Modal.Title>
        <Modal.Body className="description">
          <TextInput ref={name} label="Name" required />
          <DateInput valueFormat="YYYY-MM-DD" label="Date" ref={date} />
          <TextInput ref={description} label="Description" required />
        </Modal.Body>
        <Button
          onClick={handleCreation}
          className="btn-task"
          variant="filled"
          color="gray"
        >
          + Create Project
        </Button>
      </Modal>

      <Paper className="no-project" withBorder shadow="md" p={30} radius="md">
        <Text c="dimmed" size="xl" ta="center" mt={5}>
          {text}
        </Text>
        <Button onClick={handleOpenCreation} mt="xl" ta="center" color="gray">
          {btn}
        </Button>
      </Paper>
    </>
  );
}
