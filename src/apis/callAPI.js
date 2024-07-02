import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const getToken = async () => {
  const res = await axios.post(`${SERVER_URL}/token`, {
    identity: "Dashboard_User",
  });
  const data = res.data;
  return data;
};

export const getCallStatusAPI = async (callSid) => {
  const res = await axios.post(`${SERVER_URL}/call-status`, {
    callSid,
  });
  const data = res.data;
  return data;
};
