import { Paper, Title, Text, Anchor } from "@mantine/core";

export default function Project({ project, notPreviewing }) {
  return (
    <Paper shadow="xl" p="xl" radius="md" className={`card project`}>
      <div className="top-preview">
        <Text c="black" size="sm" ta="center" mt={5}>
          Want to go back?{" "}
          <Anchor
            className="anchor"
            td="underline"
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
        <Text className="category preview-description" size="x">
          {project.description}
        </Text>
      </div>
    </Paper>
  );
}
