import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  },[]);

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <PokemonCard name={pokemon.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
