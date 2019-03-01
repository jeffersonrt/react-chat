const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'message/ADD':
    case 'message/RECEIVED':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default messagesReducer;
