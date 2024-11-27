import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem
        as="aside"
        bg="teal.700"
        p="1.3rem"
        colSpan={{ base: 6, lg: 1 }}
        minHeight={{ lg: "100vh" }}
      >
        <Sidebar />
      </GridItem>

      <GridItem as="main" colSpan={{ base: 6, lg: 5 }}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
