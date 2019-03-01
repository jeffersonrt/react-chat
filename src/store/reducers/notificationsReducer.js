const notificationsReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'notification/ADD':
      return {
        counter: state.counter + 1
      };
    case 'notification/RESET':
      return {
        counter: 0
      };
    default:
      return state;
  }
};

export default notificationsReducer;
