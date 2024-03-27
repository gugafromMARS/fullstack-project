import { Paper, Title, Text, Button, Anchor } from "@mantine/core";
import "./Preview.css";
import Tasks from "./Tasks";

export default function Preview({ selectedProject, notPreviewing }) {
  const project = selectedProject[0];

  return (
    <div className="previewing">
      <Paper
        shadow="xl"
        p="xl"
        radius="md"
        className={`card ${project.color} project`}
      >
        <div>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Want to go back?{" "}
            <Anchor
              className="anchor"
              size="sm"
              component="button"
              onClick={notPreviewing}
            >
              Cancel
            </Anchor>
          </Text>
          <Text className="category" size="x">
            {`Id: ${project.id}`}
          </Text>
          <Title order={3} className="title">
            {project.name}
          </Title>
          <Text className="category" size="xs">
            {project.date}
          </Text>
          <Text className="category" size="x">
            {project.description}
          </Text>
        </div>
      </Paper>
      <Paper
        shadow="xl"
        p="xl"
        radius="md"
        className={`card-tasks ${project.color}`}
      >
        <Title order={3} className="title-tasks">
          Tasks
        </Title>
        <Tasks seletedProject={project} />
        <div className="bottom-btn">
          <Button variant="white" color="dark" className="btn-task">
            Add task
          </Button>
        </div>
      </Paper>
    </div>
  );
}
