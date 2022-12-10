import { Box } from "@mui/system";
import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as PokedexImg } from '../../assets/svg1.svg';

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
      <Link to="/pokemon-list">
        <svg>
          <PokedexImg />
        </svg>
        {/* <img
          src={PokedexImg}          
          width="20%"
          style={{
            boxShadow: "10px 10px 10px black",
            borderRadius: "10%",
            backgroundColor: "black"
          }}
        /> */}
      </Link>
    </Box>
  );
};

export default PokedexAnimation;
