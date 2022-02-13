import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MarginIcon from "@mui/icons-material/Margin";
import { theme } from "../../components/theme/default";

function Services() {
  return (
    <Container style={{ backgroundColor: "white", padding: "20px" }}>
      <Typography
        marginTop={5}
        variant="h3"
        fontWeight="bold"
        fontFamily={"Source Sans Pro"}
        textAlign={"center"}
      >
        Our Services
      </Typography>

      <Typography
        variant="body2"
        marginTop={2}
        fontFamily={"Montserrat"}
        fontWeight="bold"
        textAlign="center"
        style={{ color: theme.palette.common.grey }}
      >
        A POS transaction may occur in person or online, with receipts generated either in print or
        electronically.
      </Typography>

      <Grid container spacing={6} marginTop={4}>
        <Grid item xs={12} sm={3} md={4}>
          <Avatar
            sx={{
              backgroundColor: theme.palette.info.main,
              left: "45%",
              width: 56,
              height: 56,
            }}
          >
            <MarginIcon />
          </Avatar>
          <Typography
            marginTop={2}
            fontSize={18}
            fontWeight="bold"
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
          >
            A cloud-based point of sale allows you to manage your stock in real time and know the
            quantity of goods you own over a given period of time.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Avatar
            sx={{
              backgroundColor: theme.palette.info.main,
              left: "45%",
              width: 56,
              height: 56,
            }}
          >
            <MarginIcon />
          </Avatar>
          <Typography
            marginTop={2}
            fontSize={18}
            marginLeft={3}
            fontWeight="bold"
            textAlign="center"
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
          >
            One of the main functions of a POS system is to record transactions that your store
            made.Recording sales transactions quickly in your system.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Avatar
            sx={{
              backgroundColor: theme.palette.info.main,
              left: "45%",
              width: 56,
              height: 56,
            }}
          >
            <MarginIcon />
          </Avatar>
          <Typography
            marginTop={2}
            fontSize={18}
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
          >
            Some POS systems allow you to manage several stores within the same software. In
            reality, most POS systems are made for single store or one location store owners
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={6} marginTop={4}>
        <Grid item xs={12} sm={3} md={4}>
          <Avatar
            sx={{
              backgroundColor: theme.palette.info.main,
              left: "45%",
              width: 56,
              height: 56,
            }}
          >
            <MarginIcon />
          </Avatar>
          <Typography
            marginTop={2}
            fontSize={18}
            fontWeight="bold"
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
          >
            A cloud-based point of sale allows you to manage your stock in real time and know the
            quantity of goods you own over a given period of time.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Avatar
            sx={{
              backgroundColor: theme.palette.info.main,
              left: "45%",
              width: 56,
              height: 56,
            }}
          >
            <MarginIcon />
          </Avatar>
          <Typography
            marginTop={2}
            fontSize={18}
            marginLeft={3}
            fontWeight="bold"
            textAlign="center"
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
          >
            One of the main functions of a POS system is to record transactions that your store
            made.Recording sales transactions quickly in your system.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Avatar
            sx={{
              backgroundColor: theme.palette.info.main,
              left: "45%",
              width: 56,
              height: 56,
            }}
          >
            <MarginIcon />
          </Avatar>
          <Typography
            marginTop={2}
            fontSize={18}
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
          >
            Some POS systems allow you to manage several stores within the same software. In
            reality, most POS systems are made for single store or one location store owners
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;
