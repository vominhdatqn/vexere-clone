import * as LOGIN from 'store/action-types/auth/login';

const actionLoginBegin = () => ({
  type: LOGIN.API_SIGN_IN.PENDING,
});

const actionLoginSuccess = data => ({
  type: LOGIN.API_SIGN_IN.SUCCESS,
  payload: data,
});

const actionLoginError = err => ({
  type: LOGIN.API_SIGN_IN.ERROR,
  payload: err,
});
export const actionLogin = data => async dispatch => {
  dispatch(actionLoginBegin());
  try {
    dispatch(actionLoginSuccess(data));
  } catch (error) {
    dispatch(actionLoginError(error));
  }
};
