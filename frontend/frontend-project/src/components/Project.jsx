import { Text, Button } from "@mantine/core";
export default function Project({ projects }) {
  const haveProjects = projects.length > 0;

  return (
    <>
      {!haveProjects && (
        <>
          <Text c="dimmed" size="xl" ta="center" mt={5}>
            No projects yet!
          </Text>
          <Button mt="xl" ta="center" color="gray">
            Add Project
          </Button>
        </>
      )}
      {haveProjects && <p>projects</p>}
    </>
  );
}
