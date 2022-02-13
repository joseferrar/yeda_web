import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { theme } from "../../components/theme/default";

function Features() {
  return (
    <Container style={{ backgroundColor: "white", padding: "20px" }}>
      {" "}
      <Grid container spacing={3} marginTop={5}>
        <Grid item xs={12} sm={3} md={5}>
          <Typography
            variant="body1"
            fontWeight="bold"
            fontFamily={"Montserrat"}
            color={theme.palette.common.aceOrange}
          >
            A tool for the future
          </Typography>
          <Grid container marginTop={2}>
            <Typography variant="h3" fontWeight="bold" fontFamily={"Source Sans Pro"}>
              Creating beautiful sales made easy
            </Typography>
          </Grid>
          <Typography
            variant="body2"
            marginTop={2}
            fontFamily={"Montserrat"}
            fontWeight="bold"
            style={{ color: theme.palette.common.grey }}
          >
            Login to your Square Point of Sale Dashboard on your computer. Your point of sale data
            is data collected by a business when a transaction happens.
          </Typography>
          <Button variant="contained" color="secondary" style={{ marginTop: 20, padding: 10 }}>
            <Typography style={{ textTransform: "capitalize" }}>Try it for free</Typography>
          </Button>
        </Grid>

        <Grid item xs={12} sm={3} md={6}>
          <img
            style={{ width: "100%", height: 300 }}
            src="https://www.weebo.com.sg/wp-content/uploads/2019/05/banner.jpg"
          />
        </Grid>
      </Grid>
      <Grid item marginTop={5}>
        <Typography
          fontSize={22}
          fontWeight="bold"
          textAlign="center"
          fontFamily={"Source Sans Pro"}
        >
          Features
        </Typography>
        <Typography
          variant="body2"
          marginTop={2}
          fontFamily={"Montserrat"}
          fontWeight="bold"
          textAlign="center"
          style={{ color: theme.palette.common.grey }}
        >
          Software which will be running on the PoS device, allowing them to scan
          <br />
          items, check reports, manage customers, and more all with just a few taps.
        </Typography>
      </Grid>
      <Grid container spacing={6} marginTop={2}>
        <Grid item xs={12} sm={3} md={4}>
          <Paper style={{ padding: theme.spacing(2), backgroundColor: theme.palette.common.dark }}>
            <Avatar
              sx={{
                backgroundColor: theme.palette.common.aceOrange,
                left: "45%",
                width: 56,
                height: 56,
              }}
            >
              <PhoneIphoneIcon />
            </Avatar>
            <Typography
              marginTop={2}
              fontSize={18}
              fontWeight="bold"
              color={"#fff"}
              textAlign="center"
              fontFamily={"Source Sans Pro"}
            >
              Inventory Management
            </Typography>
            <Typography
              variant="body2"
              marginTop={2}
              fontFamily={"Montserrat"}
              fontWeight="bold"
              textAlign="center"
              color={theme.palette.default.main}
            >
              A cloud-based point of sale allows you to manage your stock in real time and know the
              quantity of goods you own over a given period of time.
            </Typography>
            <Typography
              marginTop={2}
              variant="body1"
              textAlign="center"
              fontWeight="bold"
              fontFamily={"Montserrat"}
              color={theme.palette.common.aceOrange}
            >
              Know More
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Paper style={{ padding: theme.spacing(2), backgroundColor: theme.palette.common.dark }}>
            <Avatar
              sx={{
                backgroundColor: theme.palette.common.aceOrange,
                left: "45%",
                width: 56,
                height: 56,
              }}
            >
              <PhoneIphoneIcon />
            </Avatar>
            <Typography
              marginTop={2}
              fontSize={18}
              marginLeft={3}
              fontWeight="bold"
              textAlign="center"
              color={theme.palette.default.main}
              fontFamily={"Source Sans Pro"}
            >
              Invoicing
            </Typography>
            <Typography
              variant="body2"
              marginTop={2}
              fontFamily={"Montserrat"}
              fontWeight="bold"
              textAlign="center"
              color={theme.palette.default.main}
            >
              One of the main functions of a POS system is to record transactions that your store
              made.Recording sales transactions quickly in your system.
            </Typography>
            <Typography
              marginTop={2}
              variant="body1"
              textAlign="center"
              fontWeight="bold"
              fontFamily={"Montserrat"}
              color={theme.palette.common.aceOrange}
            >
              Know More
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Paper style={{ padding: theme.spacing(2), backgroundColor: theme.palette.common.dark }}>
            <Avatar
              sx={{
                backgroundColor: theme.palette.common.aceOrange,
                left: "45%",
                width: 56,
                height: 56,
              }}
            >
              <PhoneIphoneIcon />
            </Avatar>
            <Typography
              marginTop={2}
              fontSize={18}
              color={theme.palette.default.main}
              fontWeight="bold"
              textAlign="center"
              fontFamily={"Source Sans Pro"}
            >
              Multi-store Management
            </Typography>
            <Typography
              variant="body2"
              marginTop={2}
              fontFamily={"Montserrat"}
              fontWeight="bold"
              textAlign="center"
              color={theme.palette.default.main}
            >
              Some POS systems allow you to manage several stores within the same software. In
              reality, most POS systems are made for single store or one location store owners
            </Typography>
            <Typography
              marginTop={2}
              variant="body1"
              textAlign="center"
              fontWeight="bold"
              fontFamily={"Montserrat"}
              color={theme.palette.common.aceOrange}
            >
              Know More
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Features;
