import "./Tasks.css";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Anchor, Text } from "@mantine/core";
import { useState } from "react";

export default function Tasks({ seletedProject }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [choosedTask, setChoosedTask] = useState(null);

  const haveTasks = seletedProject.tasks.length > 0;

  if (!haveTasks) {
    return <p>Don`t have tasks yet!</p>;
  }

  function handleTaskClick(task) {
    setChoosedTask(task);
    open();
  }

  return (
    <>
      {choosedTask && (
        <Modal className="modal" opened={opened} onClose={close}>
          <Modal.Title className="title-pop">Task description</Modal.Title>
          <Modal.Body className="description">
            {choosedTask.description}
          </Modal.Body>
        </Modal>
      )}

      <ul className="tasks-list">
        {seletedProject.tasks.map((task) => (
          <Anchor
            className="anchor"
            size="sm"
            component="button"
            onClick={() => handleTaskClick(task)}
            key={task.id}
          >
            <Text size="xl">
              <li>{task.name}</li>
            </Text>
          </Anchor>
        ))}
      </ul>
    </>
  );
}
