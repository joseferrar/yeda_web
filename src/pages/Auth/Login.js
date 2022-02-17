import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import logo from "../../packages/images/yeda_logo.png";
import { theme } from "../../components/theme/default";
import { loginAction } from "../../redux/actions/authAction";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required").min(6, "6 characters required"),
    }),
    onSubmit: async (data) => {
      await dispatch(loginAction(data, navigate));
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
          Login
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
            value={formik?.values?.email}
            onChange={formik.handleChange}
            helperText={formik.touched.email ? formik.errors.email : null}
            error={formik.touched.email ? formik.errors.email : null}
          />
          <FormControl required fullWidth sx={{ mt: 3 }} variant="outlined">
            <InputLabel required error={formik.touched.email ? formik.errors.email : null}>
              Password
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              type={secureTextEntry ? "password" : "text"}
              value={formik?.values?.password}
              onChange={formik.handleChange}
              error={formik.touched.password ? formik.errors.password : null}
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
              {formik.touched.password ? formik.errors.password : null}
            </FormHelperText>
          </FormControl>
          <Grid container marginTop={theme.spacing(3)}>
            <Grid item xs>
              <FormControlLabel
                style={{ display: "table-cell" }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item style={{ marginTop: theme.spacing(1) }}>
              <Link to="/forgot" variant="body2" style={{ textDecoration: "none" }}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: theme.spacing(4) }}
            onClick={formik.handleSubmit}
          >
            Login
          </Button>
        </form>
        <Grid item container style={{ marginTop: theme.spacing(6), marginLeft: theme.spacing(15) }}>
          <Typography>Don&apos;t have an account? </Typography>
          <Link
            to="/register"
            variant="body2"
            style={{
              textDecoration: "none",
              marginLeft: theme.spacing(0.5),
              color: theme.palette.common.aceOrange,
            }}
          >
            {"Sign Up"}
          </Link>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Login;
