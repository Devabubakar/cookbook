import React from 'react';

import { Snackbar } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  snackBarMessageSelector,
  snackBarOpenSelector,
  snackBarTypeSelector,
} from '../redux/snackbar/selectors';
import { setSnackBar } from '../redux/snackbar/actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vh',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function CustomizedSnackBar({
  snackBarMessage,
  snackBarOpen,
  snackBarType,
  dispatch,
}) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setSnackBar(false, '', 'success')); //resets after clossing
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snackBarOpen}
        autoHideDuration={2000}
        message={snackBarMessage}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant='filled'
          onClose={handleClose}
          severity={snackBarType}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  snackBarType: snackBarTypeSelector,
  snackBarMessage: snackBarMessageSelector,
  snackBarOpen: snackBarOpenSelector,
});

export default connect(mapStateToProps)(CustomizedSnackBar);
