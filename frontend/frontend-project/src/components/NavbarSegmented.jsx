import { SegmentedControl, Text } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import classes from "./NavbarSegmented.module.css";

export default function NavbarSegmented({ userLogout, userDto }) {
  return (
    <div className={classes.orientation}>
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

        <div className={classes.navbarMain}></div>

        <div className={classes.footer}>
          <a href="#" className={classes.link} onClick={userLogout}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
