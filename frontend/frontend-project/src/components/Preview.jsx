import { Paper, Title, Text, Button } from "@mantine/core";

export default function Prewiew({ selectedProject, notPreviewing }) {
  const project = selectedProject[0];

  return (
    <Paper shadow="md" p="xl" radius="md" className={`card ${project.color}`}>
      <div>
        <Button onClick={notPreviewing} />
        <Text className="category" size="xs">
          {project.id}
        </Text>
        <Title order={3} className="title">
          {project.name}
        </Title>
        <Text className="category" size="xs">
          {project.date}
        </Text>
        <Text className="category" size="xs">
          {project.description}
        </Text>
      </div>
      <Button variant="white" color="dark">
        Add task
      </Button>
    </Paper>
  );
}
