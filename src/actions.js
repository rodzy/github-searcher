export const t = {
  LOAD_USER_DATA: "LOAD_USER_DATA",
  LOAD_USER_DATA_SUCCESS: "LOAD_USER_DATA_SUCCESS",
};

export const actions = {
  loadUserData: (name,id) => ({
    type: t.LOAD_USER_DATA,
    name,
    id,
  }),

  loadUserDataSuccess: (data) => ({
    type: t.LOAD_USER_DATA_SUCCESS,
    data,
  }),
};
