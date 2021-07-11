import React from 'react';

import {} from '@material-ui/icons';

import Search from '../components/search';
import RecipeCard from '../components/cardList';
import { connect } from 'react-redux';
import { fetchStart } from '../redux/recipe/actions';


class Homepage extends React.Component {
 
  
  render() {
    
    const { fetchStart } = this.props;
    fetchStart();

    return (
      <div>
        <Search />

        <RecipeCard />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchStart: () => dispatch(fetchStart()),
});

export default connect(null, mapDispatchToProps)(Homepage);
