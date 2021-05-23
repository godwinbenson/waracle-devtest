import * as React from "react";
import { Routes } from "../routes/Routes";
import { Navigation } from "./Navigation";

export const Layout: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes />
    </>
  );
};
