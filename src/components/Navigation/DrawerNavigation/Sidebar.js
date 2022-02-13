import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { theme } from "../../theme/default";

const useStyles = makeStyles({
  active: {
    background: theme.palette.common.dark,
    borderTopRightRadius: 20,
    borderEndEndRadius: 20,
    color: "#fff",
    "&:hover": {
      background: theme.palette.common.dark,
      color: "#fff",
      borderTopRightRadius: 20,
      borderEndEndRadius: 20,
    },
  },
  icon: {
    color: "#fff",
  },
  activeIcon: {
    color: "#000",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <Stack direction="column" spacing={1} marginTop={2} marginLeft={5} marginBottom={2}>
        <Avatar
          alt="Remy Sharp"
          src="https://bi.im-g.pl/im/e9/ad/18/z25877225Q,Elon-Musk.jpg"
          sx={{ width: 120, height: 120 }}
        />
        <Typography variant="body1" fontWeight="bold">
          Company Name
        </Typography>
        <Typography fontFamily={"Source Sans Pro"}>test@gmail.com</Typography>
      </Stack>

      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem
          button
          onClick={() => navigate("/sales")}
          className={location.pathname === "/sales" ? classes.active : null}
        >
          <ListItemIcon
            className={location.pathname === "/sales" ? classes.icon : classes.activeIcon}
          >
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"My Sales"} />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
