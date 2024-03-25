import { Carousel } from "@mantine/carousel";
import { Paper, Title, Text, Button, rem } from "@mantine/core";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import classes from "./CardsCarousel.module.css";

function Card({ id, name, date, description, userEmail, tasks }) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        <Text className={classes.category} size="xs">
          {id}
        </Text>
        <Title order={3} className={classes.title}>
          {name}
        </Title>
        <Text className={classes.category} size="xs">
          {date}
        </Text>
        <Text className={classes.category} size="xs">
          {description}
        </Text>
      </div>
      <Button variant="white" color="dark">
        Select Project
      </Button>
    </Paper>
  );
}

export default function CardsCarousel({ projects }) {
  return (
    <div className={classes.dios}>
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  );
}
