import "./CardsCarousel.css";
import Card from "./Card";
import NoProject from "./NoProject";

export default function CardsCarousel({
  projects,
  previewing,
  createProject,
  userDto,
}) {
  return (
    <div className="dios">
      <NoProject
        text="No Project Selected"
        btn="+ Create Project"
        createProject={createProject}
        userDto={userDto}
      />
      {projects.map((project) => (
        <Card key={project.id} {...project} previewing={previewing} />
      ))}
    </div>
  );
}
