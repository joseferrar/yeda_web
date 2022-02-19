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
import { theme } from "../theme/default";

function CartCard() {
  return (
    <div>
      <Paper style={{ padding: 12, borderRadius:0 }} elevation={3}>
        <Typography
          fontWeight="bold"
          fontFamily={"Source Sans Pro"}
          textAlign="center"
          fontSize={22}
        >
          My Cart
        </Typography>
        <div style={{ marginBottom: 12 }}>
          <Box sx={{ display: "flex", marginTop: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Typography
              variant="body2"
              fontFamily={"Source Sans Pro"}
              fontWeight="bold"
              marginTop={1}
              marginLeft={1}
            >
              Pizza Bar
            </Typography>

            <Typography
              variant="body2"
              fontFamily={"Source Sans Pro"}
              fontWeight="bold"
              marginTop={1}
              marginLeft={"auto"}
            >
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
        </div>
        <div style={{ marginBottom: 12 }}>
          <Box sx={{ display: "flex", marginTop: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Typography
              variant="body2"
              fontFamily={"Source Sans Pro"}
              fontWeight="bold"
              marginTop={1}
              marginLeft={1}
            >
              Pizza Bar
            </Typography>

            <Typography
              variant="body2"
              fontFamily={"Source Sans Pro"}
              fontWeight="bold"
              marginTop={1}
              marginLeft={"auto"}
            >
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
        </div>

        <div style={{ marginBottom: 12 }}>
          <Box sx={{ display: "flex", marginTop: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Typography
              variant="body2"
              fontFamily={"Source Sans Pro"}
              fontWeight="bold"
              marginTop={1}
              marginLeft={1}
            >
              Pizza Bar
            </Typography>

            <Typography
              variant="body2"
              fontFamily={"Source Sans Pro"}
              fontWeight="bold"
              marginTop={1}
              marginLeft={"auto"}
            >
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
        </div>

        <Divider />
        <div style={{ marginBottom: 12 }}>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="body1"
              fontFamily={"Source Sans Pro"}
              fontWeight="bold"
              marginTop={1}
              marginLeft={1}
            >
              Total
            </Typography>

            <Typography
              variant="body1"
              fontFamily={"Source Sans Pro"}
              fontWeight="bold"
              marginTop={1}
              marginLeft={"auto"}
            >
              $422.00
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            style={{
              marginTop: 14,
              width: "100%",
              backgroundColor: theme.palette.success.main,
              borderRadius: 20,
              textTransform: "capitalize",
            }}
          >
            {" "}
            <Typography variant="body1" fontFamily={"Source Sans Pro"} fontSize={18}>
              Checkout
            </Typography>
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default CartCard;
