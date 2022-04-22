import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

function CardPokemon({ name, image, weight, height }) {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component='img'
          height='200'
          image={image}
          alt={name}
          className='image__pokemon'
        />
        <CardContent>
          <Typography
            style={{
              fontSize: 18,
              marginLeft: "0.5rem",
              fontWeight: "bold",
            }}
            color='text.secondary'
            gutterBottom>
            {name}
          </Typography>
          <Stack direction='row'>
            <Chip
              color='warning'
              style={{ margin: "0.5rem" }}
              label={`Weight: ${weight}`}
            />
            <Chip
              color='info'
              label={`Height: ${height}`}
              style={{ margin: "0.5rem" }}
            />
          </Stack>
        </CardContent>
      </Card>
      <style global jsx>{`
        .image__pokemon {
          object-position: center center;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}

CardPokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
};

export default CardPokemon;
