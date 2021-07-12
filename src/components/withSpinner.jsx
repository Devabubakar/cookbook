import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const PreLoader = styled(LinearProgress)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '100vw',
  height: '10px',
});

const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? <PreLoader /> : <WrappedComponent {...otherProps} />;
  };
};

export default WithSpinner;
