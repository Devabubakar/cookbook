import React from 'react';

import {
  Drawer,
  Hidden,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { Menu, Brightness2 } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import DrawerItem from './drawer';

//hide appbar on scroll

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
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  appbarItems: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  darkmode: {
    color: 'black',
    backgroundColor: '#e6e0e6',
  },
  iconbutton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      visibility: 'hidden',
    },
  },
  content: {
    padding: theme.spacing(3),
  },
  hide: {
    visibility: 'hidden',
    display: 'none',
  },
}));

const Sidebar = () => {
  const [toggler, setToggle] = React.useState(false);
  const toggleSide = () => {
    setToggle(!toggler);
  };

  const classes = useStyles();
  const trigger = useScrollTrigger();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation='false'>
        <Toolbar className={classes.appbarItems}>
          <IconButton
            color='primary'
            onClick={toggleSide}
            className={classes.iconbutton}
          >
            <Menu />
          </IconButton>

          <Typography
            variant='h5'
            color='primary'
            className={trigger ? classes.hide : classes.LogoHeader}
            align='center'
          >
            Cookbook
          </Typography>
          <IconButton className={classes.darkmode}>
            <Brightness2 />
          </IconButton>
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
    </div>
  );
};

export default Sidebar;
