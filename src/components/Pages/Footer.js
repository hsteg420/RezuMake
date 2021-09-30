import React from "react";
import { Box } from "@material-ui/core";

const Footer = () => {
  return (
    <Box
      style={{
          padding: "10px",
        background: "rgb(14, 14, 14)",
        position: "relative",
        width: "100%",
        textAlign:"center"
      }}
    >
      <a
        style={{ color: "rgb(41, 70, 65)",textDecoration:"none" }}
        href="https://github.com/hsteg420"
      >
        Made by Varsha Singh
      </a>
    </Box>
  );
};
export default Footer;
