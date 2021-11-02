const initial_state = {
  users: [],
  current_user: {},
};

let action = (state = initial_state, action) => {
  switch (action.type) {
    case "SETUSER":
      return {
        ...state,
        current_user: action.payload,
      };
    case "FIREBASEUSERS":
      return {
        ...state,
        users: action.payload,
      };
  }
  return state;
};
export default action;
