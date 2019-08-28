import { formActions, initialData } from '../helpers/data';

function formReducer(state, action) {
  switch (action.type) {
    case formActions.START:
      return {
        ...state,
        isLoading: true,
      };
    case formActions.SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case formActions.FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case formActions.RESET:
      return { ...state, ...initialData };
    default:
      return state;
  }
}

export default formReducer;
