const initialState = {
  loading: false,
  state:"",
  errorMsg: "",
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    
    case "SELECT_STATE":
      console.log(action.payload);
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};

export default blockchainReducer;
