import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import VideoCall from "@material-ui/icons/VideoCall";

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
    boxShadow: "none"
  },
  grow: {
    flexGrow: 1
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
    </div>
  );
}

export default Home;
