export const ActionType = {
  SET_CURRENY_PAGE: `page/setCurrentPage`,
};

export const ActionCreator = {
  setCurrentPage: (page) => ({
    type: ActionType.SET_CURRENY_PAGE,
    payload: page,
  }),
};
