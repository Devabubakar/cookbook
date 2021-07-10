import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '10px',

    height: 'auto',
  },
  media: {
    height: 150,
  },

  content: {
    backgroundColor: '#D1D5DB',
  },
});

export default function MediaCard({ recipe }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised>
      <CardActionArea>
        <CardMedia className={classes.media} image={recipe.image} />
        <CardContent className={classes.content}>
          <Typography gutterBottom color='primary'>
            {recipe.label}
          </Typography>
          <Chip label={recipe.healthLabels[0]} color='secondary' />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
