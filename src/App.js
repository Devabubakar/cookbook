import { Switch, Route } from 'react-router-dom';
import  Homepage  from './pages/homepage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact to='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
