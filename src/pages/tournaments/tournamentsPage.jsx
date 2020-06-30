import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import red from "@material-ui/core/colors/red";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import FortniteAPI from "fortnite-api-io";
import React, {useEffect, useState} from "react";

const fortniteAPI = new FortniteAPI(process.env.REACT_APP_API);

const useStyles = makeStyles((theme) => ({
  media: {
    height: 635
  }
}));

const getTournaments = async () => {
  const a = await fortniteAPI.getTournaments();
  debugger;
  return a.events;
};

function TournamentsPage() {
  const classes = useStyles();
  const [tournaments, setTournaments] = useState([]);

  const displayTournaments = () => {
    return tournaments.map((t, i) => (
      <Grid item key={i} xs={12} md={4} lg={4}>
        <Card>
          <CardMedia
            className={classes.media}
            image={t.poster}
            title={t.short_description}
          />
          <CardContent classes={{root: classes.name}}>
            <p>{t.short_description}</p>
            <small>Plataformas: {t.platforms.join(", ")}</small>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  useEffect(() => {
    getTournaments().then(response => setTournaments(response));
  }, []);

  return (
    <Grid container direction="center" justify="center">
      {tournaments.length ? displayTournaments() : <Grid><CircularProgress /></Grid>}
    </Grid>
  );
}

export default withWidth()(TournamentsPage);
