import {ActionType} from '../store/actions';

const initialState = {
  currentPage: `Profile`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENY_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
  };
  return state;
};

export {reducer};
