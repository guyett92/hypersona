import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../components/Layout";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

const styles = {
  form: {
    textAlign: "center",
  },
  image: {
    margin: "20px auto 20px auto",
  },
  pageTitle: {
    margin: "10px auto 10px auto",
  },
  textField: {
    margin: "10px auto 10px auto",
  },
  button: {
    marginTop: 20,
    position: "relative",
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  progress: {
    position: "absolute",
  },
};

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(
        "https://us-central1-intersona-5c0dd.cloudfunctions.net/api/login",
        formData
      )
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    console.log(data);
  };

  return (
    <div>
      <Layout title="Login" description="Login page">
        <Grid container style={styles.form}>
          <Grid item sm />
          <Grid item sm>
            <img
              src="/images/hypersona.png"
              alt="hypersona logo"
              style={styles.image}
            />
            <Typography variant="h2" style={styles.pageTitle}>
              Login
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                style={styles.textField}
                helperText={errors.email}
                error={errors.email ? true : false}
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                style={styles.textField}
                helperText={errors.password}
                error={errors.password ? true : false}
                value={formData.password}
                onChange={handleChange}
                fullWidth
              />
              {errors.general && (
                <Typography variant="body2" style={styles.customError}>
                  {errors.general}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={styles.button}
                disabled={loading}
              >
                Login
                {loading && (
                  <CircularProgress size={30} style={styles.progress} />
                )}
              </Button>
              <br />
              <small>
                {`Don't have an account? Sign Up `}
                <Link href="/signup" passHref>
                  here
                </Link>
              </small>
            </form>
          </Grid>
          <Grid item sm />
        </Grid>
      </Layout>
    </div>
  );
};

export default Login;
