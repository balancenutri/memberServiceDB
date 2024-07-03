import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const getToken = async () => {
  const res = await axios.post(`${SERVER_URL}/api/call/token`, {
    identity: "Dashboard_User",
  });
  const data = res.data;
  return data;
};

export const getCallStatusAPI = async (callSid) => {
  const res = await axios.get(
    `${SERVER_URL}/api/call/call-status?callSid=${callSid}`
  );
  const data = res.data;
  return data;
};
export const getAllCalls = async () => {
  const res = await axios.get(`${SERVER_URL}/api/call/get-calls`);
  const data = res.data;
  return data;
};