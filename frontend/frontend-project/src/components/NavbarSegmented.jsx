import { SegmentedControl, Text, Paper } from "@mantine/core";
import { IconDatabaseImport, IconLogout } from "@tabler/icons-react";
import classes from "./NavbarSegmented.module.css";
import { getProjects } from "./CreateUserRequest";
import { useEffect, useState } from "react";
import Project from "./Project";

const tabs = {
  account: [{ link: "", label: "Projects", icon: IconDatabaseImport }],
};

export default function NavbarSegmented({ userLogout, userDto }) {
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
        setUserProjects(userProjects);
      }
    }
    handleProjects();
  }, [userProjects, userDto.user.email]);

  const links = tabs.account.map((item) => (
    <a
      className={classes.link}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <div className={classes.projects}>
      <div id={classes.orientation}>
        <nav className={classes.navbar}>
          <div>
            <Text
              fw={500}
              size="sm"
              className={classes.title}
              component="label"
              c="dimmed"
              mb="xs"
            >
              {userDto.user.email}
            </Text>

            <SegmentedControl
              transitionTimingFunction="ease"
              fullWidth
              data={[{ label: "Account", value: "account" }]}
            />
          </div>

          <div className={classes.navbarMain}>{links}</div>

          <div className={classes.footer}>
            <a href="#" className={classes.link} onClick={userLogout}>
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span>Logout</span>
            </a>
          </div>
        </nav>
      </div>
      <Paper
        className={classes.project}
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
      >
        <Project projects={userProjects} />
      </Paper>
    </div>
  );
}
