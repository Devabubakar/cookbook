import React from 'react';

import {
  Drawer,
  Hidden,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { DrawerItem } from './drawer';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#D1D5DB',
    border: 'none',
  },

  toolbar: theme.mixins.toolbar,

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
  },
  appbar: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  iconbutton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  content: {
    padding: theme.spacing(3),
  },
}));

const Sidebar = () => {
  const [toggler, setToggle] = React.useState(false);
  const toggleSide = () => {
    setToggle(!toggler);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton
            color='primary'
            onClick={toggleSide}
            className={classes.iconbutton}
          >
            <Menu />
          </IconButton>
          <Typography variant='h3' color='primary' align='center' noWrap>
            CookBook
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp>
          <Drawer
            variant='temporary'
            classes={{
              paper: classes.drawerPaper,
            }}
            open={toggler}
            onClose={toggleSide}
          >
            <div className={classes.toolbar} />
            <DrawerItem />
          </Drawer>
        </Hidden>

        <Hidden xsDown>
          <Drawer
            variant='permanent'
            classes={{
              paper: classes.drawerPaper,
            }}
            open
          >
            <div className={classes.toolbar} />
            <DrawerItem />
          </Drawer>
        </Hidden>
      </nav>

      <menu className={classes.content}>
        <div className={classes.toolbar} />
        <h1>Hello world</h1>
      </menu>
    </div>
  );
};

export default Sidebar;
