import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {getAllSneakersAsync} from '../store/sneakerActions'
import SneakerItem from "../components/SneakerItem";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSneakersAsync());
    // eslint-disable-next-line
  }, []);

  const sneakers = useSelector((state) => state.sneakers.allSneakers);

  const sneaker = sneakers.map((sneaker) => {
    return <SneakerItem key={sneaker.id} sneaker={sneaker} />;
  });

  return (
    <div className="home--page">
      <Container style={{marginTop: '6rem'}}>
        <Grid container spacing={2}>
          {sneaker}
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
