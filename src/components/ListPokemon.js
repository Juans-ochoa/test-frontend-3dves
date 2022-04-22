import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

function ListPokemon({ name, image, weight, height }) {
  return (
    <>
      <ListItem
        alignItems='flex-start'
        style={{ border: "thin solid #cdc4c2", borderRadius: "1rem" }}>
        <ListItemAvatar>
          <Avatar alt={name} src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Typography
                sx={{ display: "inline", margin: "0 5px 0 0" }}
                component='span'
                variant='body2'
                color='text.primary'>
                Weight: {weight}
              </Typography>
              <Typography
                sx={{ display: "inline", margin: "0 5px 0 0" }}
                component='span'
                variant='body2'
                color='text.primary'>
                Height: {height}
              </Typography>
            </>
          }
        />
      </ListItem>
    </>
  );
}

ListPokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
};

export default ListPokemon;
