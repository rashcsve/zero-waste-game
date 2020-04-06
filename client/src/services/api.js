import axios from "axios";
// require('dotenv').config();

const API_URL = process.env.API_URL || "http://localhost:3000";

async function getId() {
  console.log(API_URL);
  const sessionId = await axios.get(`${API_URL}/api/session`);
  return sessionId.data.result.session_id;
}

async function askAssistant(msg, sessionId) {
  const message = await axios.post(`${API_URL}/api/message`, {
    session_id: sessionId,
    input: {
      message_type: "text",
      text: msg,
    },
  });
  return message.data.result;
}

export default { getId, askAssistant };
