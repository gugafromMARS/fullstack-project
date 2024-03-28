import { Paper, Title, Text, Button } from "@mantine/core";
import "./Card.css";

export default function Card({
  id,
  name,
  date,
  description,
  userEmail,
  tasks,
  previewing,
}) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={`card background`}>
      <div>
        <Text className="category id" size="xs">
          {id}
        </Text>
        <Title order={3} className="title">
          {name}
        </Title>
        <Text className="category" size="xs">
          {date}
        </Text>
      </div>
      <Button onClick={() => previewing(id)} variant="white" color="dark">
        Select Project
      </Button>
    </Paper>
  );
}
