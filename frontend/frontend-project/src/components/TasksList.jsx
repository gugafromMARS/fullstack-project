import { Anchor, Text, Paper, Title, Button } from "@mantine/core";
import "./TasksList.css";

export default function TasksList({ seletedProject, taskOpen, addTask }) {
  return (
    <Paper shadow="xl" p="xl" radius="md" className={`card-tasks`}>
      <Title order={3} className="title-tasks">
        Tasks
      </Title>
      <ul className="tasks-list">
        {seletedProject.tasks.map((task) => (
          <Anchor
            className="anchor"
            size="sm"
            component="button"
            onClick={() => taskOpen(task)}
            key={task.name}
          >
            <Text size="xl">
              <li className="li-task" key={task.id}>
                {task.name}
              </li>
            </Text>
          </Anchor>
        ))}
      </ul>
      <div className="bottom-btn">
        <Button onClick={addTask} variant="filled" color="gray">
          New Task
        </Button>
      </div>
    </Paper>
  );
}
