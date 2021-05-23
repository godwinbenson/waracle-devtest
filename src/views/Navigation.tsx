import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <Box>
      <Link to="/">
        <Box>TerraQuest Solutions</Box>
      </Link>
    </Box>
  );
};
