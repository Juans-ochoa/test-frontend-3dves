import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removePokemon } from "../actions/pokemonActions";
import imgDefault from "../assets/images/pokemon.png";

export default function PokemonProfile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    pokemon: { image, name, height, weight },
  } = state;
  return (
    <>
      <Card variant='outlined' className='card__pokemon_profile'>
        <CardMedia
          src={image || imgDefault}
          className='image__pokemon'
          component='img'
          height={200}
          alt='Pokemon'
        />
        <button
          className='btn__delete'
          onClick={() => dispatch(removePokemon())}>
          x
        </button>
        <CardContent>
          <Typography variant='h5' component='h5'>
            {name || "Select a pokemon."}
          </Typography>
          <p>
            Weight: <strong>{weight || 0}</strong>
          </p>
          <p>
            Height: <strong>{height || 0}</strong>
          </p>
        </CardContent>
      </Card>
      <style global jsx>{`
        .card__pokemon_profile {
          position: fixed;
          width: 260px;
          border-radius: 1rem;
          border-color: #d4cacd;
        }

        .image__pokemon {
          object-position: center center;
          object-fit: contain;
        }

        .btn__delete {
          padding: 0.4rem;
          position: absolute;
          top: 5px;
          right: 5px;
          outline: none;
          border: none;
          border-radius: 50%;
          font-weight: bold;
          background-color: #ee104b;
          color: white;
          line-height: 10px;
          cursor: pointer;
        }

        .btn__delete:hover {
          opacity: 0.8;
        }

        .btn__delete:active {
          transform: scale(0.9);
        }
      `}</style>
    </>
  );
}
