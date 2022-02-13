import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container style={{ backgroundColor: "white", padding: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} md={5}>
            <Grid container marginTop={4}>
              <Typography variant="h3" fontWeight="bold" fontFamily={"Montserrat"}>
                Welcome to
              </Typography>
              <Paper
                style={{
                  backgroundColor: "#5A20CB",
                  marginLeft: 10,
                  paddingLeft: 6,
                  paddingRight: 6,
                }}
              >
                <Typography variant="h4" fontWeight="bold" color="#fff" marginTop={1}>
                  Yeda
                </Typography>
              </Paper>
            </Grid>
            <Typography variant="body2" marginTop={4} fontFamily={"Montserrat"} fontWeight="bold">
              Food delivery is a courier service in which a restaurant, store, or independent
              food-delivery company delivers food to a customer.There are numerous benefits of the
              food delivery service it expands your customer base, increases your revenue, gives
              your customers a variety of options, and it also offers unparalleled convenience.
            </Typography>
            <Button color="secondary" variant="contained" style={{ marginTop: 30 }}>
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} sm={3} md={6}>
            <img
              style={{ width: "100%", height: 400, marginLeft: 20 }}
              src="https://omniaccounts.co.za/wp-content/uploads/2021/03/What-are-the-Key-Features-of-a-Point-of-Sale-System.jpg"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Welcome;
