import { Link } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const PokedexAnimation = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {/* <Link to="/"> */}
        <img width="20%" src="/assets/svg1.svg"></img>
      {/* </Link> */}
    </Box>
  );
};

export default PokedexAnimation;
