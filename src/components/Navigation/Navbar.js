import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { theme } from "../theme/default";
import logo from "../../packages/images/yeda_logo.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static" style={{ backgroundColor: theme.palette.warning.main }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
            }}
          >
            <Avatar alt="Remy Sharp" src={logo} sx={{ width: 40, height: 40 }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            fontWeight="bold"
            color={"#000"}
            sx={{
              flexGrow: 1,
            }}
          >
            Yeda
          </Typography>
          {location.pathname === "/login" || location.pathname === "/register" ? null : (
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Button color="secondary" variant="contained" onClick={() => navigate("login")}>
                Login
              </Button>
            </Box>
          )}

          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <Button color="secondary" variant="contained" onClick={() => navigate("login")}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
