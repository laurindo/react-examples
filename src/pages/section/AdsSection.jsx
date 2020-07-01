import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth from "@material-ui/core/withWidth";
import React, {useEffect} from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 5,
    padding: 5,
    position: "fixed",
    zIndex: 100
  },
  grid: {
    backgroundColor: "#442c4f",
    height: "100vh",
    zIndex: "-1"
  },
  title: {
    color: "#D6D4DB"
  },
}));

function AdsSection() {
  const classes = useStyles();
  useEffect(() => {}, []);
  return (
    <Grid item xs={12} lg={3} className={classes.grid}>
      <div className={classes.container}>
        <h3 className={classes.title}>ADS Section</h3>
      </div>
    </Grid>
  );
}

export default withWidth()(AdsSection);
