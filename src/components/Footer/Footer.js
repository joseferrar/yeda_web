import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { theme } from "../theme/default";

function Footer() {
  return (
    <Box
      className="footer"
      style={{
        left: 0,
        marginTop: 80,
        bottom: 0,
        width: "100%",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        backgroundColor: theme.palette.common.lightgrey,
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        color={theme.palette.common.dark}
        fontFamily={"Montserrat"}
        fontWeight="bold"
      >
        &copy; Copyright 2023
      </Typography>
    </Box>
  );
}

export default Footer;
