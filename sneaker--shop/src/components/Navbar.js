import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import {
  makeStyles,
  useScrollTrigger,
  AppBar,
  Container,
  Toolbar,
  Slide,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "whitesmoke",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    color: "red",
    marginLeft: "10px",
  },
  drawerPaper: {
    position: "relative",
    width: "80vw",
    backgroundColor: "#FBAB7E",
    backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  ListItemText: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#ffffff",
  },
  IconButton: {
    position: "absolute",
    right: 0,
    color: "#ffffff",
  },
  ClearIcon: {
    color: "#ffffff",
  },
  Avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "0 auto",
    marginTop: "2rem",
  },
  fontsize: {
    fontSize: "4rem",
  },
}));

function HideOnScroll(props) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

function Navbar() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className="navbar--wrapper">
      <HideOnScroll>
        <AppBar className={classes.AppBar}>
          <Container>
            <Toolbar className={classes.Toolbar}>
              <Logo />
              <Search />
              <Menu />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon className={classes.fontsize} />
              </IconButton>
            </Toolbar>
            <MobileMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
          </Container>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}

export default Navbar;
