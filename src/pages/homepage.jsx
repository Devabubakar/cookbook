import React from 'react';

import {} from '@material-ui/icons';

import Search from '../components/search';
import RecipeCard from '../components/cardList';
import { connect } from 'react-redux';
import { fetchStart } from '../redux/recipe/actions';

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
    };
  }
  componentDidMount = (props) => {
    try {
      fetch(
        'https://api.edamam.com/api/recipes/v2?type=public&app_id=5a0dcf71&app_key=bbb43e9dfafda4038efeab6bdf03fe54&diet=balanced'
      )
        .then((response) => response.json())
        .then((recipeObject) => this.setState({ recipes: recipeObject.hits }));
    } catch (error) {
      console.log('error', error);
    }
  };
  render() {
    const { recipes } = this.state;
    const { fetchStart } = this.props;
    fetchStart();

    return (
      <div>
        <Search />

        <RecipeCard recipes={recipes} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchStart: () => dispatch(fetchStart()),
});

export default connect(null, mapDispatchToProps)(Homepage);
