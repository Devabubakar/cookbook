import snackBarTypes from './types';
const INITIAL_STATE = {
  snackBarMessage: '',
  snackBarOpen: false,
  snackBarType: 'success',
};

const snackBarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case snackBarTypes.SET_SNACKBAR:
      return {
        ...state,
        snackBarOpen: action.payload.snackBarOpen,
        snackBarMessage: action.payload.snackBarMessage,
        snackBarType: action.payload.snackBarType,
      };
    default:
      return state;
  }
};

export default snackBarReducer;
