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
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }    
    var response = axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => setPokemons(res))
    .catch((err) => console.log(err));
    return response;    
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
              <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
