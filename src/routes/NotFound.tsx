import { Box, Button } from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <Box>
      <h1>Page not found.</h1>
      <p>Maybe you mistyped something?</p>

      <hr />
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Box>
  );
};
