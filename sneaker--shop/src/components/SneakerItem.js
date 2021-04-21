import React from "react";
import {Link} from 'react-router-dom'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  makeStyles,
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  gridItem: {
    transition: "all 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function SneakerItem({ sneaker }) {
  const classes = useStyles();

  if (!sneaker) {
    return null;
  }

  return (
    <Grid item md={3} sm={6} xs={12} className={classes.gridItem}>
      <Paper elevation={3}>
        <Card classes={{ root: classes.root }}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={
              sneaker.media.thumbUrl ||
              "https://cdn.statically.io/img/duypets.com/wp-content/uploads/2019/09/suc-khoe-cho-shiba-inu-2-580x350.jpg?w=580&f=auto"
            }
            title="item thumnail"
          />
          <CardContent className={classes.CardContent}>
            <Typography variant="body2" color="textSecondary" component="p">
              {sneaker.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`$${sneaker.retailPrice}`}
            </Typography>
          </CardContent>
          <CardActionArea component={Link} to={`/detailItemsPage${sneaker.id}`}>
            <ShoppingCartIcon />
          </CardActionArea>
        </Card>
      </Paper>
    </Grid>
  );
}

export default SneakerItem;
