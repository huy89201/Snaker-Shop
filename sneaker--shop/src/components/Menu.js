import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, ListItem, List, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  List: {
    backgroundColor: 'none',
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  ListItemText: {
    color: 'black',
    fontSize: '1.5em',
    fontWeight: 'bold'
  }
}));

function Menu() {
  const classes = useStyles();

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

  return (
    <div className="menu--wrapper">
      <List className={classes.List}>
        {menuItems.map((item) => (
          <ListItem button key={item.title} component={Link} to={item.link}>
            <ListItemText primary={item.title} classes={{ primary: classes.ListItemText }}/>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Menu;
