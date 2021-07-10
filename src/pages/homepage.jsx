import React from 'react';

import {} from '@material-ui/icons';

import Search from '../components/search';
import RecipeCard from '../components/card';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Search />

        <RecipeCard />
      </div>
    );
  }
}

export default Homepage;
