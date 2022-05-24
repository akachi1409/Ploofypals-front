import { fetchData } from "../data/dataActions";



const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};


const selectStateRequest = (payload) => {
  return {
    type: "SELECT_STATE",
    payload: payload,
  };
};

const uploadTraitRequest = (payload) => {
  return {
    type: "UPLOAD_TRAIT",
    payload: payload
  }
}

const cancelStateRequest = () =>{
  return {
    type: "CANCEL_STATE",
  }
}
export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const provider = window.ethereum;
  };
};

export const selectState = (state) => {
  return async (dispatch) => {
    dispatch(selectStateRequest(state));
  };
};

export const uploadTrait = (state, uploaded) =>{
  return async (dispatch) => {
    uploaded.push(state);
    dispatch(uploadTraitRequest(uploaded));
  }
}
export const cancelState = () =>{
  return async (dispatch) => {
    dispatch(cancelStateRequest());
  }
}