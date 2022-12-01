import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
