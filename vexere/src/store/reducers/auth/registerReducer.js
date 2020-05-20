import update from 'immutability-helper';

const initialState = {
  pending: false,
  isSuccess: false,
  isError: false,
};

export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
