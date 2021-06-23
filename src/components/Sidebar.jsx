import React from 'react';

import {
  Drawer,
  Hidden,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Link,
} from '@material-ui/core';
import {
  Menu,
  Create,
  Home,
  Bookmark,
  ShoppingBasket,
  Copyright,
  GitHub,
  Twitter,
  LinkedIn,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  ListItemText: {
    borderRadius: '15px',
    '&:hover': {
      backgroundColor: 'rgba(59,130,246,0.5)',
    },
  },
  link: {
    padding: '10px',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#D1D5DB',
    border: 'none',
  },

  toolbar: theme.mixins.toolbar,
  logo: {
    height: '20vh',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '90vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
  },
  appbar: {
    backgroundColor: 'transparent',
    alignItems:'center',
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

//sidebar items
const drawerItems = [
  {
    item: 'Home',
    icon: <Home />,
  },
  {
    item: 'Categories',
    icon: <ShoppingBasket />,
  },
  {
    item: 'Add Recipe',
    icon: <Create />,
  },
  {
    item: 'Bookmark',
    icon: <Bookmark />,
  },
];

const Sidebar = () => {
  const [toggler, setToggle] = React.useState(false);
  const toggleSide = () => {
    setToggle(!toggler);
  };

  const classes = useStyles();

  const drawer = (
    <List className={classes.container}>
      <div>
        <Button variant='contained' color='primary'>
          Sign Up / Log In
        </Button>
      </div>
      <div>
        {drawerItems.map((drawerItem) => {
          const { item, icon } = drawerItem;
          return (
            <ListItem button key={item} className={classes.ListItemText}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          );
        })}
      </div>

      <div>
        <ListItem>Abubakar Ali</ListItem>
        <ListItem>
          <Copyright fontSize='small' />
          2021 React Js
        </ListItem>
        <ListItem>
          <Link
            href='https://github.com/Devabubakar'
            color='inherit'
            className={classes.link}
          >
            <GitHub />
          </Link>
          <Link
            href='https://github.com/Devabubakar'
            color='inherit'
            className={classes.link}
          >
            <Twitter />
          </Link>
          <Link
            href='https://linkedin/in/Devabubakar'
            color='inherit'
            className={classes.link}
          >
            <LinkedIn />
          </Link>
        </ListItem>
      </div>
    </List>
  );

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
            {drawer}
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

            {drawer}
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
