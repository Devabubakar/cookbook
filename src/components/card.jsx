import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '10px',
    borderRadius:'15px',

    height: 'auto',
  },
  media: {
    height: 150,
    
  },

  content: {
    backgroundColor: '#D1D5DB',
  },
});

function MediaCard({ meal, history, match }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      raised
      onClick={() => history.push(`/recipe/${meal.idMeal}`)}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={meal.strMealThumb} />
        <CardContent className={classes.content}>
          <Typography gutterBottom color='primary'>
            {meal.strMeal}
          </Typography>
          <Chip color='secondary' label={meal.strCategory} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withRouter(MediaCard);
