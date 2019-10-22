import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typorgraphy from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    image: {
        maxWidth: 200,
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
}

class Scream extends Component {
  render() {
    dayjs.extend(relativeTime)
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
          image={userImage}
          title="Profile image" 
          className={classes.image}
          component="img"
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
                {dayjs(createdAt).fromNow()}
            </Typography>
            <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default (withStyles(styles)(Scream));