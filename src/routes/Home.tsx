import { Button } from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <h1>React Interview Project</h1>
      <p>
        Welcome to the TerraQuest React interview project! Please use this
        project to develop the test requirements within.
      </p>

      <hr />

      <Button>
        <Link to="/companies">View Companies</Link>
      </Button>
    </React.Fragment>
  );
};
