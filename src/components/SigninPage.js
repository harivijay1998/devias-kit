import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography, Link, Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain 8 characters, one uppercase, one lowercase, one number, and one special character"
    ),
});

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain 8 characters, one uppercase, one lowercase, one number, and one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  newPassword: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain 8 characters, one uppercase, one lowercase, one number, and one special character"
    )
    .required("New Password is required"),
});

const SigninPage = () => {
  const [formType, setFormType] = useState("signin"); 
  const navigate = useNavigate()

  const toggleForm = (type) => {
    setFormType(type);
  };

  const handleForgotPassword = (values) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = storedUsers.findIndex((user) => user.email === values.email);

    if (userIndex !== -1) {
      storedUsers[userIndex].password = values.newPassword;
      localStorage.setItem("users", JSON.stringify(storedUsers));
      alert("Password updated successfully!");
      toggleForm("signin");
    } else {
      alert("Email not found.");
    }
  };

  const handleSignIn = (values) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      alert("Sign-in successful!");
      navigate("/Home");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <img className="logo" alt="logo" src="images/logo--dark.svg"></img>

          <Box sx={{ paddingInline: "150px", paddingBlock: "150px" }}>
            <Typography variant="h3" color="black">
              {formType === "signup"
                ? "Sign Up"
                : formType === "forgotPassword"
                ? "Forgot Password"
                : "Sign In"}
            </Typography>
            <Typography variant="p" color="black">
              {formType === "signup" ? (
                <>
                  Already have an account?{" "}
                  <Link href="#" onClick={() => toggleForm("signin")}>
                    Sign In
                  </Link>
                </>
              ) : formType === "forgotPassword" ? (
                <>
                  Remember your password?{" "}
                  <Link href="#" onClick={() => toggleForm("signin")}>
                    Sign In
                  </Link>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <Link href="#" onClick={() => toggleForm("signup")}>
                    Sign Up
                  </Link>
                </>
              )}
            </Typography>

            <Formik
              initialValues={
                formType === "signup"
                  ? { email: "", password: "", confirmPassword: "" }
                  : formType === "forgotPassword"
                  ? { email: "", newPassword: "" }
                  : { email: "", password: "" }
              }
              validationSchema={
                formType === "signup"
                  ? SignUpSchema
                  : formType === "forgotPassword"
                  ? ForgotPasswordSchema
                  : SignInSchema
              }
              onSubmit={(values) => {
                if (formType === "signup") {
                  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
                  storedUsers.push({ email: values.email, password: values.password });
                  localStorage.setItem("users", JSON.stringify(storedUsers));
                  alert("Sign-up successful!");
                  toggleForm("signin");
                } else if (formType === "forgotPassword") {
                  handleForgotPassword(values);
                } else {
                  handleSignIn(values);
                }
              }}
            >
              {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    margin="normal"
                  />
                  {formType !== "forgotPassword" && (
                    <TextField
                      fullWidth
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      margin="normal"
                    />
                  )}
                  {formType === "forgotPassword" && (
                    <TextField
                      fullWidth
                      id="newPassword"
                      name="newPassword"
                      label="New Password"
                      type="password"
                      variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.newPassword && Boolean(errors.newPassword)}
                      helperText={touched.newPassword && errors.newPassword}
                      margin="normal"
                    />
                  )}

                  {formType === "signin" && (
                    <Typography sx={{ marginTop: "10px" }}>
                      Forgot your password?{" "}
                      <Link href="#" onClick={() => toggleForm("forgotPassword")}>
                        Reset Password
                      </Link>
                    </Typography>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    {formType === "signup"
                      ? "Sign Up"
                      : formType === "forgotPassword"
                      ? "Reset Password"
                      : "Sign In"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>

       
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: "#090e23",
            paddingInline: "100px",
            paddingBlock: "50px",
          }}
        >
          <Typography variant="h5" color="white" sx={{ textAlign: "center" }}>
            Welcome to <Typography variant="span" color="green">Devias Kit</Typography>
          </Typography>
          <Typography variant="p" color="white" sx={{ textAlign: "center" }}>
            A professional template with ready-to-use MUI components.
          </Typography>
          <Box
            component="img"
            alt="kitimg"
            src="images/auth-widgets.png"
            sx={{ width: "600px", height: "515px", objectFit: "contain" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SigninPage;
