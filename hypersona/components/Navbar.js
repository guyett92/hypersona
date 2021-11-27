import React from "react";

// NextJs stuff
import { Link } from "next/link";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <AppBar color="secondary">
      <Toolbar className="nav-container">
        <Button color="inherit" component={Link} href="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/signup">
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
