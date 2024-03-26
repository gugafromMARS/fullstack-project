import { Paper, Title, Text, Button } from "@mantine/core";
import "./Card.css";

export default function Card({
  id,
  name,
  date,
  description,
  userEmail,
  tasks,
  color,
  previewing,
}) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={`card ${color}`}>
      <div>
        <Text className="category" size="xs">
          {id}
        </Text>
        <Title order={3} className="title">
          {name}
        </Title>
        <Text className="category" size="xs">
          {date}
        </Text>
        <Text className="category" size="xs">
          {description}
        </Text>
      </div>
      <Button onClick={() => previewing(id)} variant="white" color="dark">
        Select Project
      </Button>
    </Paper>
  );
}
