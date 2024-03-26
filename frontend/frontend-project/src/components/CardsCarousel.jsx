import "./CardsCarousel.css";
import Card from "./Card";
import NoProject from "./NoProject";

export default function CardsCarousel({ projects, previewing }) {
  return (
    <div className="dios">
      <NoProject text="No Project Selected" btn="+ Add Project" />
      {projects.map((project) => (
        <Card key={project.id} {...project} previewing={previewing} />
      ))}
    </div>
  );
}
