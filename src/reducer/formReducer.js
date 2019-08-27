const formReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state };
    case 'FETCH_SUCCESS':
      return { ...state, data: action.data };
    case 'FETCH_FAILURE':
      //   console.log('Fetching failure');
      return { ...state };
    default:
      return state;
  }
};

export default formReducer;
