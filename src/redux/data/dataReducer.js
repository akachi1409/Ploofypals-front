const initialState = {
  loading: false,
  balance: 0,
  cost: 0,
  error: false,
  errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    case "Send_A_Success":
      return {
        ...state,
        error: false,
        errorMsg: ""
      }
    case "Send_A_Fail":
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      }
      case "Send_Ape_Success":
        return {
          ...state,
          error: false,
          errorMsg: ""
        }
      case "Send_Ape_Fail":
        return {
          ...state,
          loading: false,
          error: true,
          errorMsg: action.payload,
        }
    default:
      return state;
  }
};

export default dataReducer;
