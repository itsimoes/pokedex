import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function PokemonCard({ name, image, types, id }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
      />
      <CardContent>
        <Box justifyContent="space-between" alignItems="center">
          <Box display="flex" justifyContent="space-between" alignItems="center" >            
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div" color="gray" alignSelf="flex-end"  marginBottom="10px">
              #{("000" + id).slice(-3)}
            </Typography>
          </Box>
          <Typography gutterBottom variant="" component="div">
            {typeHandler()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
