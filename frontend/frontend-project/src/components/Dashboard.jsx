import NavbarSegmented from "./NavbarSegmented";
import Project from "./Project";
import "./Dashboard.css";

export default function Dashboard({ userDto, userLogout }) {
  return (
    <div className="dashboard">
      <NavbarSegmented userDto={userDto} userLogout={userLogout} />
      <Project userDto={userDto} />
    </div>
  );
}
