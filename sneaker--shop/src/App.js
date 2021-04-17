import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAllSneakersAsync } from "./store/sneakerActions";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import HomePage from "./page/HomePage";
import SearchPage from "./page/SearchPage";
import Cardpage from "./page/Cardpage";
import DetailItemsPage from "./page/DetailItemsPage";
import CategorisePage from "./page/CategorisePage";
import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  button: {
    backgroundColor: "#FAD961",
    backgroundImage: "linear-gradient(225deg, #FAD961 0%, #F76B1C 100%)",
  },
}));

function ScrollTop(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {props.children}
      </div>
    </Zoom>
  );
}

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAllSneakersAsync());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/catergorise">
            <CategorisePage />
          </Route>
          <Route path="/searchPage">
            <SearchPage />
          </Route>
          <Route path="/cardpage">
            <Cardpage />
          </Route>
          <Route path="/detailItemsPage">
            <DetailItemsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

      <ScrollTop>
        <Fab
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          className={classes.button}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default App;
