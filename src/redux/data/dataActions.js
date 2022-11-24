const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};


export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      
      dispatch(
        fetchDataSuccess({
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};

export const sendASuc = (account, amount) => {
  // return async (dispatch) => {
    sendMsg("BabyDoge:"+ account + " + has sent eth of " + amount);
  // }
} 
export const sendAErr = (account, amount) => {
  sendMsg("BabyDoge:"+ account + " failed in sending eth of " + amount);
}
