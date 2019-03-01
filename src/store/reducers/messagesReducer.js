const initialState = [
  {
    id: 'current1551321500150',
    date: '2019-02-28T02:38:20.150Z',
    userId: '8978978798',
    username: 'vitor',
    text: 'Initial State'
  }
];

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'message/ADD':
    case 'message/RECEIVED':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default messagesReducer;
