import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";

// import { theme } from "../theme/default";

function CartCard() {
  return (
    <div>
      <Paper style={{ padding: 10 }}>
          <Typography fontWeight="bold" fontSize={20}>My Cart</Typography>
        <Box sx={{ display: "flex", marginTop: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="body2" fontWeight="bold" marginTop={1} marginLeft={1}>
            Pizza Bar
          </Typography>

          <Typography variant="body2" fontWeight="bold" marginTop={1} marginLeft={"auto"}>
            $22.00
          </Typography>
        </Box>

        <Box sx={{ display: "flex", marginLeft: 7.5, marginTop: -4 }}>
          <ButtonGroup
            variant="outlined"
            style={{
              borderStyle: "solid",
              borderColor: "gray",
              borderRadius: 120,
              height: 30,
              borderWidth: 2,
              marginTop: 8,
            }}
          >
            <Button variant="text">
              <Typography fontSize={18} color="secondary">
                +
              </Typography>
            </Button>
            <Typography style={{ marginTop: 4, fontSize: 12 }}>12</Typography>
            <Button variant="text">
              <Typography fontSize={22} color="secondary">
                -
              </Typography>
            </Button>
          </ButtonGroup>
          <IconButton
            aria-label="delete"
            size="medium"
            style={{ marginLeft: "auto", color: "red" }}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Divider style={{ marginTop: 4, marginBottom: 8 }} />
        <Box sx={{ display: "flex" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="body2" fontWeight="bold" marginTop={1} marginLeft={1}>
            Pizza Bar
          </Typography>

          <Typography variant="body2" fontWeight="bold" marginTop={1} marginLeft={"auto"}>
            $22.00
          </Typography>
        </Box>

        <Box sx={{ display: "flex", marginLeft: 7.5, marginTop: -4 }}>
          <ButtonGroup
            variant="outlined"
            style={{
              borderStyle: "solid",
              borderColor: "gray",
              borderRadius: 120,
              height: 30,
              borderWidth: 2,
              marginTop: 8,
            }}
          >
            <Button variant="text">
              <Typography fontSize={18} color="secondary">
                +
              </Typography>
            </Button>
            <Typography style={{ marginTop: 4, fontSize: 12 }}>12</Typography>
            <Button variant="text">
              <Typography fontSize={22} color="secondary">
                -
              </Typography>
            </Button>
          </ButtonGroup>
          <IconButton
            aria-label="delete"
            size="medium"
            style={{ marginLeft: "auto", color: "red" }}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Paper>
    </div>
  );
}

export default CartCard;
