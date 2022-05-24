const initialState = {
  loading: false,
  state:"",
  uploaded:[],
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
      return {
        ...state,
        state: action.payload,
      };
    case "UPLOAD_TRAIT":
      console.log(action)
      return{
        ...state,
        state:'',
        uploaded: action.payload
      }
    default:
      return state;
  }
};

export default blockchainReducer;
