import { createSelector } from 'reselect';

export const snackBarStore = (state) => state.snackBar;

export const snackBarMessageSelector = createSelector(
  [snackBarStore],
  (snackBar) => snackBar.snackBarMessage
);
export const snackBarTypeSelector = createSelector(
  [snackBarStore],
  (snackBar) => snackBar.snackBarType
);
export const snackBarOpenSelector = createSelector(
  [snackBarStore],
  (snackBar) => snackBar.snackBarOpen
);
