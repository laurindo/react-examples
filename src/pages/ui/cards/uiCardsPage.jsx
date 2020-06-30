import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth from "@material-ui/core/withWidth";
import React from "react";
import ADSSection from "../../section/adsSection";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 40,
    paddingTop: 100
  },
  title: {
    color: "#D6D4DB"
  },
  media: {
    height: 0,
    padding: "56.25%"
  },
  ads: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5
  }
}));

function UICardsPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <h3 className={classes.title}>UI Cards</h3>
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <Card classes={{root: classes.card}} onClick={() => props.history.push("/ui/cards/simpleCard")}>
                <CardHeader title={"Card Animation with CSS"} subheader={"Cool animation using css3"}/>
                <CardMedia
                  image={"https://cdn.dribbble.com/users/225098/screenshots/12470251/media/f023b4d4670819726258800420f09852.png"}
                  className={classes.media}
                />
              </Card>
            </Grid>

            <Grid item lg={4}>
              <Card classes={{root: classes.card}}>
                <CardHeader title={"Card Animation with CSS"} subheader={"Cool animation using css3"}/>
                <CardMedia
                  image={"https://cdn.dribbble.com/users/225098/screenshots/12470251/media/f023b4d4670819726258800420f09852.png"}
                  className={classes.media}
                />
              </Card>
            </Grid>

            <Grid item lg={4}>
              <Card classes={{root: classes.card}}>
                <CardHeader title={"Card Animation with CSS"} subheader={"Cool animation using css3"}/>
                <CardMedia
                  image={"https://cdn.dribbble.com/users/225098/screenshots/12470251/media/f023b4d4670819726258800420f09852.png"}
                  className={classes.media}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <ADSSection/>
      </Grid>
    </div>
  );
}

export default withWidth()(UICardsPage);
