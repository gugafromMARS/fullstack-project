import NavbarSegmented from "./NavbarSegmented";
import Projects from "./Projects";
import "./Dashboard.css";

export default function Dashboard({ userDto, userLogout }) {
  return (
    <div className="dashboard">
      <NavbarSegmented userDto={userDto} userLogout={userLogout} />
      <Projects userDto={userDto} />
    </div>
  );
}
