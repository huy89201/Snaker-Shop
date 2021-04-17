import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "./Logo";
import Search from "./Search";
import ClearIcon from "@material-ui/icons/Clear";
import {
  makeStyles,
  useScrollTrigger,
  AppBar,
  Container,
  Toolbar,
  Slide,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Hidden,
  Avatar,
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
    [theme.breakpoints.up("sm")]: {
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

  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Categories",
      link: "/catergorise",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const drawer = (
    <>
      <IconButton onClick={handleDrawerToggle} className={classes.IconButton}>
        <ClearIcon fontSize="large" className={classes.ClearIcon} />
      </IconButton>

      <Avatar className={classes.Avatar} />

      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.title}
            component={Link}
            to={item.link}
            onClick={handleDrawerToggle}
          >
            <ListItemText
              primary={item.title}
              classes={{ primary: classes.ListItemText }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <div className="navbar--wrapper">
      <HideOnScroll>
        <AppBar className={classes.AppBar}>
          <Container>
            <Toolbar className={classes.Toolbar}>
              <Logo />
              <Search />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <Hidden smUp implementation="css">
              <Drawer
                anchor="left"
                open={mobileOpen}
                transitionDuration={400}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
          </Container>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}

export default Navbar;
