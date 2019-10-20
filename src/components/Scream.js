import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typorgraphy from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        dislplay: 'flex',
        marginBottom: 20,
    },
    image: {
        minWidth: 200,
    },
    content: {
        padding: 25
    }
}

class Scream extends Component {
  render() {
    const { 
        classes, 
        scream : { 
            body, 
            createdAt, 
            userImage, 
            userHandle, 
            screamId, 
            likeCount, 
            commetCount 
        } 
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.image}
          src={userImage}
          title="Profile image" 
        />
        <CardContent className={classes.content}>
            <Typorgraphy 
              variant="h5" 
              component={Link}
              to={`/users/${userHandle}`}
              color="primary"
            >
                {userHandle}
            </Typorgraphy>
            <Typography variant="body2" color="textSecondary">
                {createdAt}
            </Typography>
            <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Scream);