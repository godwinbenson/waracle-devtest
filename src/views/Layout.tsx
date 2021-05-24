import { Box, Grid, VStack } from "@chakra-ui/react";
import * as React from "react";
import { Routes } from "../routes/Routes";
import { Navigation } from "./Navigation";

export const Layout: React.FC = ({ ...rest }) => {
  return (
    <>
      <Navigation px={5} py={3} />
      <Routes />
      {/* <Grid minH="100vh" p={3}>
        <VStack maxW="1200px"></VStack>
      </Grid> */}
    </>
  );
};
