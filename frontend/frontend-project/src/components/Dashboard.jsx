import NavbarSegmented from "./NavbarSegmented";
import "./Dashboard.css";
import NoProject from "./NoProject";
import Carousel from "./CardsCarousel";
import Preview from "./Preview";
import { useEffect, useState } from "react";
import { getProjects, addTask } from "./CreateUserRequest";
import { createProject } from "./CreateUserRequest";
import { deleteProject } from "./CreateUserRequest";
import { deleteTask } from "./CreateUserRequest";

export default function Dashboard({ userDto, userLogout }) {
  const [userProjects, setUserProjects] = useState([]);
  const [error, setError] = useState();
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [projectSelected, setProjectSelected] = useState();

  useEffect(() => {
    handleProjects();
  }, [userProjects]);

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

  async function handleCreateProject(projectCreated) {
    try {
      const project = await createProject(projectCreated);
      setUserProjects((prevProjects) => {
        return [...prevProjects, project];
      });
      handleProjects();
    } catch (error) {
      setError({
        message: error.message || "Failed to create project",
      });
    }
  }

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

  function handleGoBack() {
    setIsPreviewing(false);
  }

  function getProjectById(id) {
    return userProjects.filter((project) => project.id == id);
  }

  async function handleAddTask(selectedProject, task) {
    try {
      const taskDto = await addTask(selectedProject, task);
      const newProject = selectedProject.tasks.push(taskDto);
      setUserProjects((prevProjects) => {
        return [...prevProjects, newProject];
      });
    } catch (error) {
      setError({
        message: error.message || "Failed to add task",
      });
    }
  }

  async function handleDeleteProject(selectedProject) {
    try {
      await deleteProject(selectedProject);
      const updatedProjects = userProjects.filter(
        (project) => project.id !== selectedProject.id
      );
      setUserProjects(updatedProjects);
      setIsPreviewing(false);
    } catch (error) {
      setError({
        message: error.message || "Failed to remove project",
      });
    }
  }

  async function handleDeleteTask(selectedProject, selectedTask) {
    try {
      await deleteTask(selectedProject, selectedTask);
      const updatedProjects = userProjects.map((project) => {
        if (project.id === selectedProject.id) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task !== selectedTask),
          };
        }
        return project;
      });
      setUserProjects(updatedProjects);
    } catch (error) {
      setError({
        message: error.message || "Failed to remove task",
      });
    }
  }

  const haveProjects = userProjects.length > 0;

  return (
    <div className="dashboard">
      <NavbarSegmented
        userDto={userDto}
        userLogout={userLogout}
        goBack={handleGoBack}
      />
      {!haveProjects && (
        <NoProject
          text="No Projects Yet"
          btn="+ Add Project"
          createProject={handleCreateProject}
          userDto={userDto}
        />
      )}
      {haveProjects && !isPreviewing && (
        <Carousel
          projects={userProjects}
          previewing={previewing}
          createProject={handleCreateProject}
          userDto={userDto}
        />
      )}
      {haveProjects && isPreviewing && (
        <Preview
          selectedProject={projectSelected}
          notPreviewing={notPreviewing}
          handleAddTask={handleAddTask}
          deleteProject={handleDeleteProject}
          deleteTask={handleDeleteTask}
        />
      )}
    </div>
  );
}
