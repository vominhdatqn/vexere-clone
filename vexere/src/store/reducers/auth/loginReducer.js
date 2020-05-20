import update from 'immutability-helper';
import * as LOGIN from 'store/action-types/auth/login';

const initialState = {
  pending: { login: false, upload: false },
  isSuccess: { login: false, upload: false },
  isError: { login: false, upload: false },
  accessToken: null,
  profile: {},
  notifications: [],
  unReadNotifications: 0,
  listUnRead: [],
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOG_OUT':
      return update(state, {
        accessToken: {
          $set: null,
        },
      });
    case 'UPDATE_COUNT_NOTIFICATION':
      return update(state, {
        listUnRead: {
          $set: [],
        },
        unReadNotifications: {
          $set: 0,
        },
      });
    case 'GET_NOTIFICATION':
      return update(state, {
        notifications: {
          $set: payload.notifications,
        },
        unReadNotifications: {
          $set: payload.unReadNotifications,
        },
        listUnRead: {
          $set: payload.listUnRead,
        },
      });

    case LOGIN.API_LOGIN_EMAIL.PENDING:
      return update(state, {
        pending: {
          login: { $set: true },
        },
      });
    case LOGIN.API_LOGIN_EMAIL.SUCCESS:
      return update(state, {
        accessToken: { $set: payload.accessToken },
        profile: { $set: payload.profile },
        pending: {
          login: { $set: false },
        },
        isSuccess: {
          upload: { $set: true },
        },
        isError: {
          upload: { $set: false },
        },
      });
    case LOGIN.API_LOGIN_EMAIL.ERROR:
      return update(state, {
        pending: {
          login: { $set: false },
        },
        isSuccess: {
          upload: { $set: false },
        },
        isError: {
          upload: { $set: true },
        },
      });
    default:
      return state;
  }
};
