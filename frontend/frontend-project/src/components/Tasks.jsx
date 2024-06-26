import "./Tasks.css";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput } from "@mantine/core";
import { useRef, useState } from "react";
import TasksList from "./TasksList";

export default function Tasks({ seletedProject, postTask, handleDelete }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [choosedTask, setChoosedTask] = useState(null);
  const [addingTask, setAddingTask] = useState(false);
  const [error, setError] = useState();
  const [project, setProject] = useState(seletedProject);

  const haveTasks = project.tasks.length > 0;

  const name = useRef();
  const description = useRef();

  function handleTaskOpen(task) {
    setChoosedTask(task);
    open();
  }

  function handleAddTask() {
    setAddingTask(true);
    open();
  }

  function handleTaskClose() {
    setChoosedTask(null);
    close();
  }

  function handleCloseAddTask() {
    setAddingTask(false);
    close();
  }

  async function handlePostTask() {
    postTask(project, {
      name: name.current.value,
      description: description.current.value,
    });
    handleCloseAddTask();
  }

  function handleDeleteTask() {
    handleDelete(project, choosedTask);
    setProject((prevProject) => {
      return {
        ...prevProject,
        tasks: prevProject.tasks.filter((task) => task.id != choosedTask.id),
      };
    });
    handleTaskClose();
  }

  return (
    <>
      {choosedTask && (
        <Modal className="modal" opened={opened} onClose={handleTaskClose}>
          <Modal.Title className="title-pop">Task description</Modal.Title>
          <Modal.Body className="description">
            {choosedTask.description}
          </Modal.Body>
          <Button
            onClick={handleDeleteTask}
            className="btn-task"
            variant="filled"
            color="gray"
          >
            Delete Task
          </Button>
        </Modal>
      )}

      {addingTask && (
        <Modal className="modal" opened={opened} onClose={handleCloseAddTask}>
          <Modal.Title className="title-pop">Add Task</Modal.Title>
          <Modal.Body className="description">
            <TextInput ref={name} label="Name" required />
            <TextInput ref={description} label="Description" required />
          </Modal.Body>
          <Button
            onClick={handlePostTask}
            className="btn-task"
            variant="filled"
            color="gray"
          >
            + Add Task
          </Button>
        </Modal>
      )}

      <TasksList
        seletedProject={project}
        taskOpen={handleTaskOpen}
        addTask={handleAddTask}
      />
    </>
  );
}
