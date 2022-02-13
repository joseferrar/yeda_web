import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import logo from "../../packages/images/yeda_logo.png";
import { theme } from "../../components/theme/default";

function Register() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("Username is required"),
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required").min(6, "6 characters required"),
      confirmPassword: yup
        .string()
        .required("Confirm Password must be required")
        .oneOf([yup.ref("password"), null], "Password not match"),
    }),
    onSubmit: async (Data) => {
      console.log(Data);
    },
  });

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        backgroundSize: "cover",
        background: theme.palette.common.lightgrey,
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
          Register
        </Typography>
        <form style={{ marginTop: theme.spacing(3), width: "100%" }}>
          <TextField
            variant="outlined"
            required
            fullWidth
            type="text"
            name="username"
            id="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            helperText={formik.touched.username ? formik.errors.username : ""}
            error={formik.touched.username ? formik.errors.username : ""}
          />
          <TextField
            sx={{ mt: 3 }}
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
            helperText={formik.touched.email ? formik.errors.email : ""}
            error={formik.touched.email ? formik.errors.email : ""}
          />
          <FormControl required fullWidth sx={{ mt: 3 }} variant="outlined">
            <InputLabel required error={formik.touched.password ? formik.errors.password : ""}>
              Password
            </InputLabel>

            <OutlinedInput
              id="password"
              name="password"
              type={secureTextEntry ? "password" : "text"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password ? formik.errors.password : ""}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleSecureEntry}
                    edge="end"
                  >
                    {secureTextEntry ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText error>
              {formik.touched.password ? formik.errors.password : ""}
            </FormHelperText>
          </FormControl>

          <FormControl required fullWidth sx={{ mt: 3 }} variant="outlined">
            <InputLabel
              required
              error={formik.touched.confirmPassword ? formik.errors.confirmPassword : ""}
            >
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="confirmPassword"
              name="confirmPassword"
              type={secureTextEntry ? "password" : "text"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword ? formik.errors.confirmPassword : ""}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleSecureEntry}
                    edge="end"
                  >
                    {secureTextEntry ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="confirmPassword"
            />
            <FormHelperText error>
              {formik.touched.confirmPassword ? formik.errors.confirmPassword : ""}
            </FormHelperText>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: theme.spacing(4) }}
            onClick={formik.handleSubmit}
          >
            Register
          </Button>
        </form>
        <Grid item container style={{ marginTop: theme.spacing(3), marginLeft: theme.spacing(15) }}>
          <Typography>Already have an account?</Typography>
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

export default Register;
