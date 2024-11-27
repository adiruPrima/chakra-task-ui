import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { AddIcon, AtSignIcon, CalendarIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <List
      color="white"
      fontSize="1rem"
      spacing={{ base: 0, lg: 7 }}
      display={{ base: "flex", lg: "block" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <ListItem>
        <ListIcon as={CalendarIcon} />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={AddIcon} />
        <NavLink to="/create">New Task</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={AtSignIcon} />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
    </List>
  );
}

export default Sidebar;
