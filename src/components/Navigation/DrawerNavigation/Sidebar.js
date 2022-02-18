import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WorkIcon from "@mui/icons-material/Work";
import { theme } from "../../theme/default";

const useStyles = makeStyles({
  active: {
    background: theme.palette.default.main,
    color: theme.palette.success.main,
    borderTopRightRadius: 20,
    borderEndEndRadius: 20,
    "&:hover": {
      background: theme.palette.default.main,
      color: theme.palette.success.main,
      borderTopRightRadius: 20,
      borderEndEndRadius: 20,
    },
  },
  text: {
    color: theme.palette.success.main,
    fontSize: 16,
  },
  icon: {
    color: theme.palette.success.main,
  },
  activeIcon: {
    color: "#fff",
    fontSize: 16,
  },
});

const userRoutes = [
  {
    id: 1,
    path: "/cart",
    name: "Cart",
    icon: <ShoppingCartIcon />,
  },
  {
    id: 2,
    path: "/myorders",
    name: "Orders",
    icon: <WorkIcon />,
  },
];

const Sidebar = (props) => {
  const { auth } = useSelector((state) => state.auth);
  const { setMobileOpen } = props;
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <Stack direction="column" spacing={1} marginTop={2} marginLeft={5} marginBottom={3}>
        <Avatar
          alt="Remy Sharp"
          src="https://bi.im-g.pl/im/e9/ad/18/z25877225Q,Elon-Musk.jpg"
          sx={{ width: 120, height: 120 }}
        />
        <Typography variant="body1" fontWeight="bold" color="white">
          {auth?.name}
        </Typography>
        <Typography fontFamily={"Source Sans Pro"} color="white">
          {auth?.email}
        </Typography>
      </Stack>

      <List>
        {userRoutes.map((item) => (
          <div key={item.id}>
            <ListItem
              button
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon
                className={location.pathname === item.path ? classes.icon : classes.activeIcon}
              >
                {item.icon}
              </ListItemIcon>
              {/* <ListItemText primary={item.name} color={theme.palette.default.main} /> */}
              <Typography
                variant="body1"
                className={location.pathname === item.path ? classes.text : classes.activeIcon}
              >
                {item.name}
              </Typography>
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};

Sidebar.propTypes = {
  setMobileOpen: PropTypes.func,
};

export default Sidebar;
