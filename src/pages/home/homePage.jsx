import AppBar from "@material-ui/core/AppBar";
import CardHeader from "@material-ui/core/CardHeader";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import withWidth from "@material-ui/core/withWidth";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import red from "@material-ui/core/colors/red";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FortniteAPI from "fortnite-api-io";
import Footer from "../../components/footer";
import {items} from "../../items";
import {weapons} from "../../weapons";
import groupBy from "lodash/groupBy";
import React, {useEffect, useState} from "react";

const fortniteAPI = new FortniteAPI(process.env.REACT_APP_API);

const useStyles = makeStyles((theme) => ({
  app: {
    padding: 50,
    marginBottom: 100,
    [theme.breakpoints.down("md")]: {
      padding: 0
    }
  },
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  grid: {
    marginBottom: 50,
    padding: 20,
    [theme.breakpoints.down("md")]: {
      marginBottom: 10
    }
  },
  root: {
    textAlign: "left",
    boxShadow: "#d8d8d8 0px 1px 20px 0px",
    cursor: "pointer",
    transition: "all 400ms cubic-bezier(.47,1.64,.41,.8)",
    background: "linear-gradient(350deg, rgba(51,44,166,1) 0%, rgba(131,24,145,1) 21%, rgba(36,105,152,1) 47%, rgba(0,166,255,1) 68%, rgba(240,103,208,1) 86%, rgba(177,103,240,1) 98%)",
    "&:hover": {
      boxShadow: "#74aad2 0px 1px 20px 0px",
      transform: "scale(1.1)"
    }
  },
  media: {
    height: 255
  },
  name: {
    backgroundColor: "#fff"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  paper: {
    height: "calc(100vh)"
  },
  detailCard: {
    padding: 20
  },
  detailTitle: {
    margin: "0 0 5px"
  },
  detailImage: {
    width: "280px"
  },
  expansion: {
    width: "100%"
  },
  newsRoot: {
    fontWeight: "bold"
  }
}));

const rarities = {
  rare: {
    name: "Raro"
  },
  common: {
    name: "Comum"
  },
  uncommon: {
    name: "Incomum"
  },
  legendary: {
    name: "Legendário"
  },
  epic: {
    name: "Épico"
  },
  mythic: {
    name: "Mítico"
  },
  transcendent: {
    name: "Transcendente"
  }
};

const games = [{
  id: "weapons",
  name: "Armas",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593284470/ei.garotos.games/weapon.png",
  visible: true
}, {
  id: "backpack",
  name: "Mochilas",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593278535/ei.garotos.games/backpack.png"
}, {
  id: "toy",
  name: "Toy",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593278458/ei.garotos.games/toy.png"
}, {
  id: "cosmeticvariant",
  name: "Cosmetic Variant",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593282768/ei.garotos.games/cosmetic.png"
}, {
  id: "pet",
  name: "Pet",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593278374/ei.garotos.games/pet.png"
}, {
  id: "glider",
  name: "Planador",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593282878/ei.garotos.games/glider.png"
}, {
  id: "contrail",
  name: "Contrail(trilha ao planar)",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593282987/ei.garotos.games/contrail.png"
}, {
  id: "outfit",
  name: "Outfit",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593282406/ei.garotos.games/outfit.png"
}, {
  id: "music",
  name: "Música",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593283114/ei.garotos.games/music.png"
}, {
  id: "pickaxe",
  name: "Pick Axe",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593283178/ei.garotos.games/pickaxe.png"
}, {
  id: "spray",
  name: "Spray",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593283262/ei.garotos.games/spray.png"
}, {
  id: "loadingscreen",
  name: "Loading Screen",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593283073/ei.garotos.games/loading.png"
}, {
  id: "wrap",
  name: "Wrap",
  img: "https://res.cloudinary.com/luneswallet/image/upload/v1593278593/ei.garotos.games/wrap.png"
}];

const getItems = async () => items;

const getWeapons = async () => {
  //const r = await fortniteAPI.listLoot({lang: 'pt-BR'});
  return weapons;
};

const getNews = async () => {
  return await fortniteAPI.getNews("br", {lang: "pt-BR"});
};

function HomePage(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [nameItems, setNameItems] = useState([]);
  const [news, setNews] = useState([]);
  const [currentItems, setCurrentItem] = useState([]);
  const [weaponGroups, setWeaponGroup] = useState({});

  useEffect(() => {
    getItems().then(response => {
      getWeapons().then(w => {
        setWeaponGroup(groupBy(w, n => n.rarity));
        setItems(response.items);
        setNameItems(Object.keys(response.items).map(i => ({name: i})));
      });
    });
    getNews().then(response => {
      debugger;
      setNews(response.news);
    });
  }, []);

  const details = item => {
    if (item.id === "weapons") {
      setCurrentItem(weaponGroups);
    } else {
      setCurrentItem(items[item.id]);
    }
    setCurrentItem(items[item.id]);
    setOpen(true);
  };

  const displayDetailCard = item => {
    return (
      <Grid item xs={12} md={4} lg={4}>
        <Card key={item.id} className={classes.detailCard}>
          <h4 className={classes.detailTitle}>{item.name}</h4>
          <h6 className={classes.detailTitle}>{item.rarity}</h6>
          <h6 className={classes.detailTitle}>{item.description}</h6>
          <img src={item.images.icon} className={classes.detailImage}/>
        </Card>
      </Grid>
    );
  };

  const displayWeapons = () => {
    const groups = Object.keys(weaponGroups);
    return groups.map((key, i) => {
      return (
        <ExpansionPanel key={i} classes={{root: classes.expansion}}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{rarities[key].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={2}>
              {weaponGroups[key].map(weapon => displayDetailCard(weapon))}
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  };

  const getADS = () => {
    try {
      window._mNHandle.queue.push(function() {
        window._mNDetails.loadTag("707767312", "970x90", "707767312");
      });
    } catch (error) {}
  };

  return (
    <div className={classes.app}>

      <div style={{width: "100%", margin: "20px 0", padding: "0 20px", textAlign: "center"}}>
        <Typography>
          Fortnite é um jogo eletrônico multijogador online revelado originalmente em 2011, desenvolvido pela Epic Games e lançado como diferentes
          modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.
        </Typography>
      </div>

      <div id="707767312">
        {getADS()}
      </div>

      {open && (
        <Dialog
          maxWidth="xl"
          fullWidth
          fullScreen={props.width === "xs"}
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{classes: {root: classes.paper}}}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>Detalhes</Typography>
              <IconButton edge="start" color="inherit" onClick={() => setOpen(false)} aria-label="close">
                <CloseIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent>
            <Grid container spacing={2}>
              {currentItems ? currentItems.map(item => displayDetailCard(item)) : displayWeapons()}
            </Grid>
          </DialogContent>
        </Dialog>
      )}

      {games.length ? (
        <Grid container justify="center">
          {games.map((item, i) => (
            item.visible === false ? null : (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3} className={classes.grid} onClick={() => details(item)}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={item.img}
                    title={item.name}
                  />
                  <CardContent classes={{root: classes.name}}>{item.name}</CardContent>
                </Card>
              </Grid>
            )
          ))}
        </Grid>
      ) : null}

      <div>
        <h1>Notícias - Battle Royale</h1>
      </div>

      <Grid container spacing={2}>
        {news.length ? news.map((n, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                className={classes.media}
                image={n.image}
                title={n.title}
              />
              <CardContent classes={{root: classes.name}}>
                <Typography component="h5" classes={{root: classes.newsRoot}}>{n.title}</Typography>
                <Typography component="p">{n.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        )) : null}
      </Grid>

      <Footer/>
    </div>
  );
}

export default withWidth()(HomePage);
