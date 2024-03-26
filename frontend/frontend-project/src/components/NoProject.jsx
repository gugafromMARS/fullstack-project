import { Paper, Text, Button } from "@mantine/core";
import "./NoProject.css";

export default function NoProject({ text, btn }) {
  return (
    <Paper className="no-project" withBorder shadow="md" p={30} radius="md">
      <Text c="dimmed" size="xl" ta="center" mt={5}>
        {text}
      </Text>
      <Button mt="xl" ta="center" color="gray">
        {btn}
      </Button>
    </Paper>
  );
}
