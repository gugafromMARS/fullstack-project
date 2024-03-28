import Carousel from "./CardsCarousel";
import { useEffect, useState } from "react";
import { getProjects } from "./CreateUserRequest";
import NoProject from "./NoProject";
import Prewiew from "./Preview";
import { addTask } from "./CreateUserRequest";

export default function Project({ userDto }) {
  const [userProjects, setUserProjects] = useState([]);
  const [error, setError] = useState();
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [projectSelected, setProjectSelected] = useState();

  useEffect(() => {
    async function handleProjects() {
      let projects;
      try {
        projects = await getProjects(userDto.user.email);

        const reversedProjects = projects.reverse();
        setUserProjects(reversedProjects);
      } catch (error) {
        setError({
          message: error.message || "Failed to get user projects",
        });
        setUserProjects([]);
      }
    }
    handleProjects();
  }, [userProjects]);

  function previewing(id) {
    handlePreview();
    setProjectSelected(getProjectById(id));
  }

  function notPreviewing() {
    handlePreview();
    setProjectSelected();
  }

  function handlePreview() {
    setIsPreviewing((prevState) => !prevState);
  }

  function getProjectById(id) {
    return userProjects.filter((project) => project.id == id);
  }

  async function handleAddTask(selectedProject, task) {
    try {
      const taskDto = await addTask(selectedProject, task);
      const newProject = selectedProject.tasks.push(task);
      setUserProjects((prevProjects) => {
        return [...prevProjects, newProject];
      });
    } catch (error) {
      setError({
        message: error.message || "Failed to add task",
      });
    }
  }

  const haveProjects = userProjects.length > 0;

  return (
    <>
      {!haveProjects && (
        <NoProject text="No Projects Yet" btn="+ Add Project" />
      )}
      {haveProjects && !isPreviewing && (
        <Carousel projects={userProjects} previewing={previewing} />
      )}
      {haveProjects && isPreviewing && (
        <Prewiew
          selectedProject={projectSelected}
          notPreviewing={notPreviewing}
          handleAddTask={handleAddTask}
        />
      )}
    </>
  );
}
