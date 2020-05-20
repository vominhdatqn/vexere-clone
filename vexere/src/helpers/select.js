import { createSelector } from 'reselect';

export const selectToken = createSelector(
  state => state.auth.login.accessToken,
  value => value
);

export const selectAuth = createSelector(
  state => state.auth,
  value => value
);

export const selectNotification = createSelector(
  state => state.notification,
  value => value
);

export const selectProfile = createSelector(
  state => state.profile,
  value => value
);
