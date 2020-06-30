import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth from "@material-ui/core/withWidth";
import FortniteAPI from "fortnite-api-io";
import React, {useEffect, useState} from "react";
import Footer from "../../components/footer";

const fortniteAPI = new FortniteAPI(process.env.REACT_APP_API);

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: 100
  },
  grid: {
    padding: 5
  },
  media: {
    height: 635
  }
}));

const getPOI = async () => {
  const a = await fortniteAPI.listCurrentPOI({lang: "pt-BR"});
  debugger;
  return a.list;
};

function POIPage() {
  const classes = useStyles();
  const [tournaments, setTournaments] = useState([]);

  const displayPOI = () => {
    return tournaments.map((t, i) => (
      <Grid item key={i} xs={12} md={4} lg={4} className={classes.grid}>
        <Card>
          <CardMedia
            className={classes.media}
            image={t.images[0].url}
          />
          <CardContent classes={{root: classes.name}}>
            <small>{t.name}</small>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  useEffect(() => {
    getPOI().then(response => setTournaments(response));
  }, []);

  return (
    <div className={classes.container}>
      <Grid container direction="center" justify="center">
        {tournaments.length ? displayPOI() : <Grid><CircularProgress/></Grid>}
      </Grid>
      <Footer/>
    </div>
  );
}

export default withWidth()(POIPage);
