import { Switch, Route } from 'react-router-dom';
import Bookmark from './components/bookmark';
import Categories from './components/categories';
import Create from './components/create';
import Signup from './components/signup';
import Sidebar from './components/sidebar';
import Homepage from './pages/homepage';
import Recipe from './components/recipe';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto'; // Defaults to weight 400.
import CustomizedSnackBar from './components/snackbar';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Roboto',
  },
  toolbar: theme.mixins.toolbar,
  container: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      //push content adjacent to sidebar on larger screens
      marginLeft: '240px',
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className='App'>
      <CustomizedSnackBar />

      <div className={classes.root}>
        <Sidebar />
        <div className={classes.container}>
          <div className={classes.toolbar} />{' '}
          {/*Provides space between searchBar/Content and AppBar*/}
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/recipe/:id' component={Recipe} />
            <Route exact path='/bookmark' component={Bookmark} />
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
