import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { GetCartAction, DeleteCartAction, UpdateCartAction } from "../../redux/actions/cartAction";
function CartCard() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const Total = cart.reduce((a, c) => a + c.quantity * c.price, 0);

  useEffect(() => {
    dispatch(GetCartAction());
  }, []);

  async function increment(item) {
    await cart.map((i) => {
      if (item._id == i._id) {
        const qtyupdate = {
          ...i,
          quantity: (i.quantity += 1),
        };
        dispatch(UpdateCartAction(i._id, qtyupdate));
      }
    });
  }

  async function decrease(item) {
    await cart.map((i) => {
      if (item._id == i._id) {
        const qtyupdate = {
          ...i,
          quantity: (i.quantity -= 1),
        };
        if (i.quantity == 0) {
          dispatch(DeleteCartAction(i._id));
        }
        dispatch(UpdateCartAction(i._id, qtyupdate));
      }
    });
  }

  return (
    <div>
      <Paper style={{ padding: 12, borderRadius: 0 }} elevation={3}>
        <Typography
          fontWeight="bold"
          fontFamily={"Source Sans Pro"}
          textAlign="center"
          fontSize={22}
        >
          My Cart
        </Typography>
        {cart &&
          cart.map((item, index) => (
            <div style={{ marginBottom: 12 }} key={index}>
              <Box sx={{ display: "flex", marginTop: 2 }}>
                <Avatar alt="Remy Sharp" src={item?.image} sx={{ width: 56, height: 56 }} />
                <Typography
                  variant="body2"
                  fontFamily={"Source Sans Pro"}
                  fontWeight="bold"
                  marginTop={1}
                  marginLeft={1}
                >
                  {item?.foodName}
                </Typography>

                <Typography
                  variant="body2"
                  fontFamily={"Source Sans Pro"}
                  fontWeight="bold"
                  marginTop={1}
                  marginLeft={"auto"}
                >
                  {`₽ ${item?.price}`}
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
                  <Button variant="text" onClick={() => increment(item)}>
                    <Typography fontSize={18} color="secondary">
                      +
                    </Typography>
                  </Button>
                  <Typography style={{ marginTop: 4, fontSize: 12 }}>{item?.quantity}</Typography>
                  <Button variant="text" onClick={() => decrease(item)}>
                    <Typography fontSize={22} color="secondary">
                      -
                    </Typography>
                  </Button>
                </ButtonGroup>
                <IconButton
                  onClick={() => dispatch(DeleteCartAction(item?._id))}
                  aria-label="delete"
                  size="medium"
                  style={{ marginLeft: "auto", color: "red" }}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </div>
          ))}
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
              {`₽ ${Total.toFixed(2)}`}
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
