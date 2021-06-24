import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Link,
} from '@material-ui/core';
import {
  Create,
  Home,
  Bookmark,
  ShoppingBasket,
  Copyright,
  GitHub,
  Twitter,
  LinkedIn,
} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

//sidebar items
const drawerItems = [
  {
    item: 'Home',
    icon: <Home />,
    link: '/',
  },
  {
    item: 'Categories',
    icon: <ShoppingBasket />,
    link: '/categories',
  },
  {
    item: 'Add Recipe',
    icon: <Create />,
    link: '/create',
  },
  {
    item: 'Bookmark',
    icon: <Bookmark />,
    link: '/bookmark',
  },
];

const useStyles = makeStyles((theme) => ({
  List: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ListItemButton: {
    borderRadius: '15px',
    '&:hover': {
      backgroundColor: 'rgba(59,130,246,0.5)',
    },
  },
}));

const DrawerItem = ({ history }) => {
  const classes = useStyles();
  return (
    <List className={classes.List}>
      <div>
        <Button
          onClick={() => history.push('/signup')}
          variant='contained'
          color='primary'
        >
          Sign Up / Log In
        </Button>
      </div>

      <div>
        {drawerItems.map((drawerItem) => {
          const { item, icon, link } = drawerItem;
          return (
            <ListItem
              button
              key={item}
              className={classes.ListItemButton}
              onClick={() => history.push(link)}
            >
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
          <Link href='https://github.com/Devabubakar' color='inherit'>
            <GitHub />
          </Link>
          <Link href='https://twitter.com/Devabubakar' color='inherit'>
            <Twitter />
          </Link>
          <Link href='https://linkedin.com/in/Devabubakar' color='inherit'>
            <LinkedIn />
          </Link>
        </ListItem>
      </div>
    </List>
  );
};

export default withRouter(DrawerItem);
