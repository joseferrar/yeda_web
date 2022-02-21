import React from "react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import logo from "../../packages/images/yeda_logo.png";
import { theme } from "../../components/theme/default";

function Forgot() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Email is required"),
    }),
    onSubmit: async (Data) => {
      console.log(Data);
    },
  });

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={4}
        style={{
          borderRadius: 0,
          marginTop: theme.spacing(7),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 360,
          height: 300,
          margin: "100px auto",
          padding: 20,
        }}
      >
        {" "}
        <Avatar
          src={logo}
          style={{
            marginTop: theme.spacing(-8),
            backgroundColor: theme.palette.secondary.main,
            width: theme.spacing(10),
            height: theme.spacing(10),
          }}
        />
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <form style={{ marginTop: theme.spacing(3), width: "100%" }}>
          <TextField
            variant="outlined"
            required
            fullWidth
            type="email"
            name="email"
            id="email"
            label="Email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            helperText={formik.touched.email ? formik.errors.email : null}
            error={formik.touched.email ? formik.errors.email : null}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: theme.spacing(4) }}
            onClick={formik.handleSubmit}
          >
            Submit
          </Button>
        </form>
        <Grid item container style={{ marginTop: theme.spacing(6), marginLeft: theme.spacing(28) }}>
          <Typography>Go back? </Typography>
          <Link
            to="/login"
            variant="body2"
            style={{
              textDecoration: "none",
              marginLeft: theme.spacing(0.5),
              color: theme.palette.common.aceOrange,
            }}
          >
            {"Sign In"}
          </Link>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Forgot;
