import {
  Button,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
} from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Menu>
        <MenuTarget>
          <Button>Toggle menu</Button>
        </MenuTarget>

        <MenuDropdown>
          <MenuLabel>Application</MenuLabel>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </MenuDropdown>
      </Menu>
    </main>
  );
}
