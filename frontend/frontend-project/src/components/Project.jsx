import { Text, Button, Paper } from "@mantine/core";
import Carousel from "./CardsCarousel";
import "./Project.css";
import { useEffect, useState } from "react";
import { getProjects } from "./CreateUserRequest";

export default function Project({ userDto }) {
  const [userProjects, setUserProjects] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function handleProjects() {
      let projects;
      try {
        projects = await getProjects(userDto.user.email);
        setUserProjects(projects);
      } catch (error) {
        setError({
          message: error.message || "Failed to get user projects",
        });
        setUserProjects([]);
      }
    }
    handleProjects();
  }, [userProjects]);

  const haveProjects = userProjects.length > 0;

  return (
    <>
      {!haveProjects && (
        <Paper
          className="project"
          withBorder
          shadow="md"
          p={30}
          mt={30}
          radius="md"
        >
          <Text c="dimmed" size="xl" ta="center" mt={5}>
            No projects yet!
          </Text>
          <Button mt="xl" ta="center" color="gray">
            Add Project
          </Button>
        </Paper>
      )}
      {haveProjects && <Carousel projects={userProjects} />}
    </>
  );
}
