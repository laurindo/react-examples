import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth from "@material-ui/core/withWidth";
import React, {useEffect} from "react";
import ADSSection from "../section/adsSection";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 40,
    paddingTop: 100
  },
  title: {
    color: "#D6D4DB"
  }
}));

const recents = [{
  name: "Simple Card",
  url: "/ui/cards/simpleCard",
  cover: "https://res.cloudinary.com/luneswallet/image/upload/v1593522879/react-examples/example01.png"
}];

function HomePage(props) {
  const classes = useStyles();
  useEffect(() => {
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={9}>
          <h3 className={classes.title}>Recent Content</h3>
          <Grid container spacing={2}>
            {recents.map((r, i) => (
              <Grid item xs={12} lg={4}>
                <Card key={i} classes={{root: classes.card}} onClick={() => props.history.push(r.url)}>
                  <CardHeader title={r.name} subheader={r.desc}/>
                  <CardMedia
                    image={r.cover}
                    className={classes.media}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <ADSSection/>
      </Grid>
    </div>
  );
}

export default withWidth()(HomePage);
