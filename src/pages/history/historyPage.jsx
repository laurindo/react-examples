import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import withWidth from "@material-ui/core/withWidth";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 20
  },
  title: {
    color: "#f3f3f3",
    margin: 0,
    padding: "5px 20px",
    backgroundColor: "#c272d9",
    borderRadius: "20px",
    alignItems: "center",
    width: "fit-content",
    lineHeight: "32px"
  },
  subTitle: {
    color: "#c272d9"
  },
  desc: {
    color: "#6b2c7d"
  },
  curiosity: {
    "& li": {
      width: "100%",
      margin: "0 10px",
      display: "block"
    }
  }
}));

function HistoryPage() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={12}>
        <h4 className={classes.title}>Conheça a história de Fortnite</h4>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <h5 className={classes.subTitle}>Lançamento</h5>
        <p className={classes.desc}>2017</p>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <h5 className={classes.subTitle}>Plataformas</h5>
        <p className={classes.desc}>PS4, Xbox, Nintendo Switch, iOS, Android, Microsoft Windows</p>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <h5 className={classes.subTitle}>Desenvolvedora</h5>
        <p className={classes.desc}>Epic Games</p>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <h5 className={classes.subTitle}>Modos de Jogo</h5>
        <p className={classes.desc}>Um jogador e multijogador</p>
      </Grid>

      <Grid item xs={12}>
        <h5 className={classes.subTitle}>Breve Descrição</h5>
        <p className={classes.desc}><b>Fortnite</b> é um jogo eletrônico multijogador online revelado originalmente em 2011,
          desenvolvido pela <i><a href="https://www.epicgames.com/store/en-US/" target="_blank">Epic Games</a></i> e lançado como diferentes modos de
          jogo que compartilham a mesma jogabilidade e motor gráfico de jogo.
          <br/><br/>Os modos de jogo incluem <b>Fortnite: Save the World</b>, um jogo cooperativo pay-to-play de sobrevivência para até
          quatro jogadores, que devem lutar contra cascas de zumbis e defender objetos com fortificações que eles possam construir, e&nbsp;
          <b>Fortnite Battle Royale</b>, um jogo free-to-play do gênero battle royale, onde até 100 jogadores lutam em espaços cada vez menores para
          serem a última pessoa ou time vencedor. <br/><br/>Ambos os modos de jogo foram lançados em 2017 como títulos de acesso antecipado.
          <br/><br/>Save the World
          está disponível apenas para Microsoft Windows, macOS, PlayStation 4 e Xbox One, enquanto Battle Royale foi lançado para essas mesmas
          plataformas, incluindo o Nintendo Switch e dispositivos iOS e Android.</p>
      </Grid>

      <Grid item xs={12}>
        <h5 className={classes.subTitle}>Curiosidades</h5>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Levou seis anos para ser lançado</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Não nasceu como um Battle Royale</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;A dança do Fortnite foi proibida em uma escola</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Foi o tema final de uma prova de escola</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Faturou mais que Vingadores: Na semana do seu lançamento</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Algumas pessoas foram por usar cheats</label>
      </Grid>

      <Grid item xs={12} lg={3}>
        <label>&bull;&nbsp;Foi anunciado em 2011, mas só foi lnçado em 2017</label>
      </Grid>

      <Grid item xs={12}>
        <p className={classes.desc}></p>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="custom pagination table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" style={{width: 160}}>
                  Ano
                </TableCell>
                <TableCell align="left">
                  Premiação
                </TableCell>
                <TableCell align="left">
                  Categoria
                </TableCell>
                <TableCell align="left">
                  Resultado
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row" style={{width: 160}}>
                  2017
                </TableCell>
                <TableCell align="left">
                  <a href="https://pt.wikipedia.org/wiki/The_Game_Awards_2017" target="_blank">The Game Awards 2017</a>
                </TableCell>
                <TableCell align="left">
                  Melhor Jogo Multiplayer
                </TableCell>
                <TableCell align="left">
                  Indicado
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row" style={{width: 160}}>
                  2018
                </TableCell>
                <TableCell align="left">
                  <p>16th Visual Effects Society Awards</p>
                  <a href="https://pt.wikipedia.org/wiki/D.I.C.E._Awards" target="_blank">D.I.C.E. Awards 2018</a>
                  <a href="https://pt.wikipedia.org/wiki/British_Academy_Games_Awards">14th British Academy Games Awards</a>
                  <p>Webby Awards 2018</p>
                  <p><a href="https://pt.wikipedia.org/wiki/Game_Critics_Awards">Game Critics Awards 2018</a></p>
                  <p><a href="https://pt.wikipedia.org/wiki/Teen_Choice_Awards">14th British Academy Games Awards</a></p>
                  <p><a href="https://pt.wikipedia.org/wiki/Golden_Joystick_Awards">Golden Joystick Awards</a></p>
                  <p><a href="https://pt.wikipedia.org/wiki/The_Game_Awards_2018">The Game Awards 2018</a></p>
                  <p><a href="">Gamers' Choice Awards</a></p>
                </TableCell>
                <TableCell align="left">
                  <p>Melhores Efeitos Especiais em um Projeto em Tempo Real (A Hard Day's Night)	</p>
                  <p>Melhor Realização Proeminente em um Jogo Online</p>
                  <p>Excelência em Multiplayer</p>
                  <p>Excelência em Jogabilidade</p>
                  <p>Melhor Jogo em Andamento</p>
                  <p>Melhor Multiplayer</p>
                  <p>Prêmio People's Voice para Melhor Jogo Multiplayer/Competitivo</p>
                  <p>Melhor Jogo em Andamento</p>
                  <p>Jogo Mais Escolhido</p>
                </TableCell>
                <TableCell align="left">
                  Indicado
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row" style={{width: 160}}>
                  2019
                </TableCell>
                <TableCell align="left">
                  <p>16th Visual Effects Society Awards</p>
                  <p><a href="https://pt.wikipedia.org/wiki/D.I.C.E._Awards" target="_blank">D.I.C.E. Awards 2019</a></p>
                  <p><a href="https://pt.wikipedia.org/wiki/National_Academy_of_Video_Game_Trade_Reviewers" target="_blank">NAVGTR Awards</a></p>
                  <p><a href="https://pt.wikipedia.org/wiki/SXSW" target="_blank">SXSW Gaming Awards 2019</a></p>
                  <p>British Academy Games Awards 2019</p>
                  <p><a href="https://pt.wikipedia.org/wiki/Teen_Choice_Awards" target="_blank">14th British Academy Games Awards</a></p>
                  <p><a href="https://pt.wikipedia.org/wiki/Famitsu" target="_blank">Famitsu Awards</a></p>
                  <p>Italian Video Game Awards</p>
                  <p>Webby Awards 2019</p>
                  <p>Game Critics Awards 2019</p>
                  <p>Golden Joystick Awards 2019</p>
                  <p><a href="https://pt.wikipedia.org/wiki/The_Game_Awards_2019" target="_blank">The Game Awards 2019</a></p>
                </TableCell>
                <TableCell align="left">
                  <p>Jogo Online do Ano</p>
                  <p>Engenharia (Fortnite Battle Royale)</p>
                  <p>Jogo, eSports (Fortnite Battle Royale)</p>
                  <p>Excelência em Multiplayer</p>
                  <p>Melhor Jogo em Andamento</p>
                  <p>Novo Jogo de eSports Mais Promissor</p>
                  <p>Jogo Mobile do Ano</p>
                  <p>Melhor Jogo em Andamento</p>
                  <p>Jogo Mobile do Ano</p>
                  <p>Prêmio de Excelência</p>
                  <p>Melhor Jogo Mobile</p>
                  <p>Melhor Jogo em Andamento</p>
                  <p>Jogo de eSports do Ano</p>
                  <p>Melhor Jogo Multiplayer/Competitivo</p>
                  <p>Melhor Jogo em Andamento</p>
                  <p>Ainda Jogando</p>
                  <p>Jogo de eSports do Ano</p>
                  <p>Melhor Jogo em Andamento</p>
                  <p>Melhor Suporte à Comunidade</p>
                  <p>Melhor Jogo de eSports</p>
                  <p>Melhor Evento de eSports (Fortnite World Cup)</p>
                </TableCell>
                <TableCell align="left">
                  Indicado
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid container style={{padding: '10px'}}>
        <Grid item xs={12}>
          <small>Referências: <a href="https://pt.wikipedia.org/wiki/Fortnite">Wikipedia</a></small>
        </Grid>
      </Grid>

    </Grid>
);
}

export default withWidth()(HistoryPage);
