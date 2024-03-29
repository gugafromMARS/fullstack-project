import "./Preview.css";
import Tasks from "./Tasks";
import Project from "./Project";

export default function Preview({
  selectedProject,
  notPreviewing,
  handleAddTask,
  deleteProject,
  deleteTask,
}) {
  const project = selectedProject[0];

  return (
    <div className="previewing">
      <Project
        project={project}
        notPreviewing={notPreviewing}
        handleDelete={deleteProject}
      />
      <Tasks
        seletedProject={project}
        postTask={handleAddTask}
        handleDelete={deleteTask}
      />
    </div>
  );
}
