import React from "react";
import { Layout } from "./src/layouts/Layout.js";
import config from "./gatsby-config.js";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
