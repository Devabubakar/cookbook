import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardImage from './assets/card.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: '345px',
  },
  media: {
    height: '300px',
    width: '300px',
  },
  GridItem: {
    margin: '30px',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Grid item className={classes.GridItem} xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              componen='img'
              className={classes.media}
              src={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Lizard
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                4,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item className={classes.GridItem} xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              componen='img'
              className={classes.media}
              src={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Lizard
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                4,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item className={classes.GridItem} xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              componen='img'
              className={classes.media}
              src={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Lizard
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                4,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item className={classes.GridItem} xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              componen='img'
              className={classes.media}
              src={cardImage}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Lizard
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lizards are a widespread group of squamate reptiles, with over
                4,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
