import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

function About() {
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
          <Grid item xs={12} sm={3} md={5} marginTop={2}>
            <Grid container>
              <Typography variant="h3" fontWeight="bold" color="primary">
                About
              </Typography>

              <Typography
                variant="h3"
                fontFamily={"Montserrat"}
                color="#000"
                marginTop={0.2}
                marginLeft={1.5}
              >
                Us
              </Typography>
            </Grid>
            <Typography variant="body2" marginTop={2} fontFamily={"Montserrat"} fontWeight="bold">
              A point of sale (POS) is a place where a customer executes the payment for goods or
              services and where sales taxes may become payable. A POS transaction may occur in
              person or online, with receipts generated either in print or electronically.
              Cloud-based POS systems are becoming increasingly popular among merchants.
            </Typography>
            <Typography variant="body2" marginTop={2} fontFamily={"Montserrat"} fontWeight="bold">
              The point of sale or point of purchase is the time and place where a retail
              transaction is completed. At the point of sale, the merchant calculates the amount
              owed by the customer, indicates that amount, may prepare an invoice for the customer,
              and indicates the options for the customer to make payment.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3} md={1}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={12} sm={3} md={5}>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#F7CD2E" }}>1</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Web Developer" secondary="Josh" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#5A20CB" }}>2</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Account Director" secondary="Krypton hackers" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#E03B8B" }}>3</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Designer" secondary="Cкoтт" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#03C6C7" }}>4</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Country" secondary="Russia" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
