import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function PokemonCard({ name, image, types, id }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[1].type.name;
    }
    return "";
  };

  const colorHandler1 = () => {

    switch (types[0].type.name) {
      case 'bug':
        return 'seagreen';
      case 'dark':
        return 'darkslateblue';
      case 'dragon':
        return 'skyblue';
      case 'electric':
        return 'gold';
      case 'fairy':
        return 'crimson';
      case 'fighting':
        return 'orangered';
      case 'fire':
        return 'tomato';
      case 'flying':
        return 'steelblue';
      case 'ghost':
        return 'rebeccapurple';
      case 'grass':
        return 'mediumseagreen';
      case 'ground':
        return 'sienna';
      case 'ice':
        return 'powderblue';
      case 'normal':
        return 'rosybrown';
      case 'poison':
        return 'orchid';
      case 'psychic':
        return 'hotpink';
      case 'rock':
        return 'darkgray';
      case 'steel':
        return 'mediumaquamarine';
      case 'water':
        return 'cornflowerblue';      
        break;
      default: return "";
    }
  }

  const colorHandler2 = () => {
    if (types[1]) {

      switch (types[1].type.name) {
      case 'bug':
        return 'seagreen';
      case 'dark':
        return 'darkslateblue';
      case 'dragon':
        return 'skyblue';
      case 'electric':
        return 'gold';
      case 'fairy':
        return 'crimson';
      case 'fighting':
        return 'orangered';
      case 'fire':
        return 'tomato';
      case 'flying':
        return 'steelblue';
      case 'ghost':
        return 'rebeccapurple';
      case 'grass':
        return 'mediumseagreen';
      case 'ground':
        return 'sienna';
      case 'ice':
        return 'powderblue';
      case 'normal':
        return 'rosybrown';
      case 'poison':
        return 'orchid';
      case 'psychic':
        return 'hotpink';
      case 'rock':
        return 'darkgray';
      case 'steel':
        return 'mediumaquamarine';
      case 'water':
        return 'cornflowerblue';      
        break;
      default: return "";
    }
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }} className="font-face-fd">
      <CardMedia className="font-face-fd"
        component="img"
        height="200"
        image={image}
        alt={name}        
      />
      <CardContent >
        <Box justifyContent="space-between" alignItems="center">
          <Box display="flex" justifyContent="space-between" alignItems="center" >
            <Typography gutterBottom variant="" fontSize="24px" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant=""  component="div" color="gray" alignSelf="flex-end" marginBottom="10px">
              #{("000" + id).slice(-3)}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography gutterBottom variant="" component="div" backgroundColor={colorHandler1()} borderRadius="5px" paddingLeft="20px" paddingRight="20px" marginRight="3px" color="white">
              {types[0].type.name}
            </Typography>
            <Typography gutterBottom variant="" component="div" backgroundColor={colorHandler2()} borderRadius="5px" paddingLeft="20px" paddingRight="20px" color="white">
              {typeHandler()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
