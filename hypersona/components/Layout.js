// Components
import Head from "next/head";
import Navbar from "./Navbar";
import { MuiThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
  // Pink: '#c400ff' and secondary pink '6f6dc1'
  palette: {
    primary: {
      light: "#53cff",
      main: "#0Af8ff",
      dark: "#0f0246",
      contrastText: "#fff",
    },
    secondary: {
      light: "#8889f3",
      main: "#7173fd",
      dark: "#090935",
      contrastText: "#fff",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const Layout = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Head>
          <title>hypersona | {props.title}</title>
          <meta
            name="description"
            content={props.description || "The future of NFTs"}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className="container">{props.children}</div>
      </div>
    </MuiThemeProvider>
  );
};

export default Layout;
