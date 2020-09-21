import React from 'react';
import './App.css';
import daisy from './Daisy.jpg';
import sunflower from './Sunflower.jpg';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    marginTop: 20,
    marginLeft: 30
  },
  media: {
    height: 140,
  },
});

function Shop() {
  const classes = useStyles();

  return (
    <div className="grid">
      <h1 style={{ fontFamily: 'bold' }}>Shop Page</h1>

      <Grid container>
        <Grid item sm>
          <Card className={classes.root}>

            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('./Daisy.jpg')}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Daisy
    </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Daisy are ....
    </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
  </Button>
              <Button size="small" color="primary">
                Details
  </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm>
          <Card className={classes.root}>

            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('./Sunflower.jpg')}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Sunflower
</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Sunflower are ....
</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
</Button>
              <Button size="small" color="primary">
                Details
</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm>

          <Card className={classes.root}>

            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('./Daisy.jpg')}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Daisy
</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Daisy are ....
</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
</Button>
              <Button size="small" color="primary">
                Details
</Button>
            </CardActions>
          </Card>

        </Grid>

      </Grid>

    </div>
  );
}


export default Shop;