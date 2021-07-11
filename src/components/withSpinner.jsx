import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const PreLoader = styled(LinearProgress)({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height:'20px'
});

const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? <PreLoader /> : <WrappedComponent {...otherProps} />;
  };
};

export default WithSpinner;
