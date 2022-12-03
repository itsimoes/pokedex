import { Box, Container } from "@mui/system";
import React from "react";
import {Link} from 'react-router-dom';

const PokedexAnimation = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      style={{
        backgroundImage: "linear-gradient(red 50% ,white 50%)"        
      }}
    >
      {/* <Link to="/Pokelist">alo */}
        <img 
        src="/assets/svg1.svg" 
        width="20%"
        
        style={{
        boxShadow:"10px 10px 10px black",        
        borderRadius:"10%",
        backgroundColor:"black"
        }}
        />
      {/* </Link> */}
    </Box>
  );
};

export default PokedexAnimation;
