import axios from "axios";


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

const resetStateRequest = () =>{
  return {
    type: "RESET_ALL",
  }
}

const generateRequest = () =>{
  return{
    type:"GENERATE_REQUEST"
  }
}

const generateSuccess = () =>{
  return{
    type: "GENERATE_SUCCESS"
  }
}

const generateFail = (payload) =>{
  return {
    type:"GENERATE_FAIL",
    payload: payload
  }
}
export const connect = () => {
  return async (dispatch) => {
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
export const resetState = () =>{
  return async (dispatch) => {
    dispatch(resetStateRequest());
  }
}
export const generateArt = () =>{
  return async (dispatch) => {
    dispatch(generateRequest())
    try{
      const res = await axios.get("http://44.192.117.177:80/generate");
      if (res.status === 200 && res.data==="Art Collection is generated!"){
        dispatch(generateSuccess())
      }else{
        dispatch(generateFail("Art collection geneate is failed!"))
      }
    }catch(err){
      dispatch(generateFail("Some is wrong in the server!"))
    }
  }
}
// export const generateArtSuccess = () =>{
//   return async (dispatch) => {
//     dispatch(generateSuccess())
//   }
// }
// export const generateArtFail = () =>{
//   return async (dispatch) => {
//     dispatch(generateFail())
//   }
// }