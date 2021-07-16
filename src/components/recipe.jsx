import React from 'react';
import { connect } from 'react-redux';
import { selectIndividualRecipe } from '../redux/recipe/selectors';
import { Typography } from '@material-ui/core';

const Recipe = ({ recipes }) => {
  const { recipe } = recipes;
  return (
    <div className=''>
      <h1>{recipe.label}</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipes: selectIndividualRecipe(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(Recipe);
