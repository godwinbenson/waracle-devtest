import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store/store";
import { Layout } from "./views/Layout";

const store = configureStore();

export const App: React.FC = () => (
  <ReduxProvider store={store}>
    <Router>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Layout />
        </Box>
      </ChakraProvider>
    </Router>
  </ReduxProvider>
);
