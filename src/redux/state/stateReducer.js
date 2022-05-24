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
      return{
        ...state,
        state:'',
        uploaded: action.payload
      }
    case "CANCEL_STATE":
      return{
        ...state,
        state:''
      }
    default:
      return state;
  }
};

export default blockchainReducer;
