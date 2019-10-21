import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from '../images/icon.png'
import Typography from '@material-ui/core/Typography';

import Grid from "@material-ui/core/Grid";

const styles = {
	form: {
		textAlign: "center"
  },
  image: {
    margin: '20px auto 20px auto'
  }
}

class login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container ClassName={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt="Log" className={classes.image}/>
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(login);