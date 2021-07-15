import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import VideoCall from "@material-ui/icons/VideoCall";

import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Whatshot from "@material-ui/icons/Whatshot";

import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh"
  },
  icons: {
    paddingRight: theme.spacing(5)
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6)
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    borderRight: "none"
  },
  drawerContainer: {
    overflow: "auto"
  },
  logo: {
    height: 27
  },
  grow: {
    flexGrow: 1
  },
  ListItemText: {
    fontSize: 14
  },
  listItem: {
    paddingTop: 4,
    paddginBottom: 4
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <MenuIcon />

          <img src="/images/preto.png" alt="logo" className={classes.logo} />

          <div className={classes.grow} />
          <IconButton className={classes.icons} color="inherit">
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <Apps />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVert />
          </IconButton>

          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Login Here
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={"Início"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <Whatshot />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={"Em Alta"}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <Subscriptions />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={"Inscrições"}
              />
            </ListItem>
          </List>
          <Divider />

          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <VideoLibrary />
              </ListItemIcon>
              <ListItemText primary={"Biblioteca"} />
            </ListItem>
          </List>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText primary={"Histórico"} />
            </ListItem>
          </List>
          <Divider />

          <Box p={5}>
            <Typography variant="body1">
              Temos um conteúdo apenas para você
            </Typography>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircle />}
              >
                Fazer Login
              </Button>
            </Box>
          </Box>
        </div>
      </Drawer>
    </div>
  );
}

export default Home;
