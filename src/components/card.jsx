import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import cardImage from './assets/card.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  '*': {
    display: 'flex',
  },
  root: {
    marginTop: '10px',
  },
  media: {
    height: 150,
  },
  GridItem: {
    margin: '30px',
  },
  content: {
    backgroundColor: '#D1D5DB',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      spacing={4}
      className={classes.root}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent className={classes.content}>
              <Typography
                gutterBottom
                variant='h6'
                component='p'
                color='primary'
              >
                Lizard
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Vegetarian
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent className={classes.content}>
              <Typography
                gutterBottom
                variant='h6'
                color='primary'
                component='p'
              >
                Lizard
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Vegetarian
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent className={classes.content}>
              <Typography
                gutterBottom
                variant='h6'
                color='primary'
                component='p'
              >
                Lizard
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Vegetarian
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent className={classes.content}>
              <Typography
                gutterBottom
                variant='h6'
                color='primary'
                component='p'
              >
                Lizard
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Vegetarian
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent className={classes.content}>
              <Typography
                gutterBottom
                variant='h6'
                color='primary'
                component='p'
              >
                Lizard
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Vegetarian
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent className={classes.content}>
              <Typography
                gutterBottom
                variant='h6'
                color='primary'
                component='p'
              >
                Lizard
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Vegetarian
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>{' '}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent className={classes.content}>
              <Typography
                gutterBottom
                variant='h6'
                color='primary'
                component='p'
              >
                Lizard
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Vegetarian
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>{' '}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent className={classes.content}>
              <Typography
                gutterBottom
                variant='h6'
                color='primary'
                component='p'
              >
                Lizard
              </Typography>
              <Typography gutterBottom variant='p' component='p'>
                Vegetarian
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
