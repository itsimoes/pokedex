import { Box } from "@mui/system";
import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as PokedexImg } from '../../assets/svg1.svg';
import './style.css'

const PokedexAnimation = () => {
  return (
    <Box className="box">
      <Link to="/pokemon-list">        
            <svg className="drop-shadow" viewBox="0 0 100 100">
              <PokedexImg />
            </svg>          
      </Link>
    </Box>
  );
};

export default PokedexAnimation;
