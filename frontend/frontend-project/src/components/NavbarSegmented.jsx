import { SegmentedControl, Text } from "@mantine/core";
import { IconDatabaseImport, IconLogout } from "@tabler/icons-react";
import classes from "./NavbarSegmented.module.css";

const tabs = {
  account: [{ link: "", label: "Projects", icon: IconDatabaseImport }],
};

export default function NavbarSegmented({ userLogout, userDto }) {
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

        <div className={classes.navbarMain}>{links}</div>

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
