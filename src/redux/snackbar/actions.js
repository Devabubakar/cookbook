import snackBarTypes from './types';
export const setSnackBar = (snackBarOpen, snackBarMessage, snackBarType) => ({
  type: snackBarTypes.SET_SNACKBAR,
  payload: { snackBarOpen, snackBarMessage, snackBarType },
});
