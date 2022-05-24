const initialState = {
  loading: false,
  state:"",
  uploaded:[],
  onGenerate: false,
  onCreate: false,
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
    case "RESET_ALL":
      return{
        ...initialState,
        state:'',
        uploaded: [],
        onGenerate: false,
        onCreate: false
      }
    case "GENERATE_REQUEST":
      return{
        ...state,
        onGenerate: true
      }
    case "GENERATE_SUCCESS":
      return{
        ...state,
        onGenerate: false,
        onCreate: true
      }
    case "GENERATE_FAIL":
      return{
        ...state,
        onGenerate: false,
        onCreate: false,
        errorMsg: action.payload
      }
    default:
      return state;
  }
};

export default blockchainReducer;
