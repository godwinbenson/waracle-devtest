import { Button, Flex, FlexProps, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Logo } from "../Logo";

interface NavigationProps extends FlexProps {
  [key: string]: any;
  children?: any;
}

export const Navigation: React.FC<NavigationProps> = ({ ...rest }) => {
  return (
    <Flex justify="space-between" {...rest}>
      <Link to="/">
        <Logo width={["10vmin", "6vmin"]} />
      </Link>

      <Stack isInline align="center">
        <ColorModeSwitcher />

        <Link to="/upload">
          <Button colorScheme="pink">Upload Your Cat </Button>
        </Link>
      </Stack>
    </Flex>
  );
};
