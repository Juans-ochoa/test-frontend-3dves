import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function PokemonProfile() {
  return (
    <>
      <Card variant='outlined' className='pokemon__profile'>
        <CardMedia component='img' height={200} alt='POkemon' />
        <CardContent>
          <Typography variant='h4' component='h4'>
            Name
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
