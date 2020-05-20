import axios from "axios";

const API_URL = "https://zero-waste-chatbot.herokuapp.com" || "http://localhost:3000";

async function getId() {
  const sessionId = await axios.get(`${API_URL}/api/session`);
  return sessionId.data.result.session_id;
}

async function askAssistant(msg, sessionId) {
  const message = await axios.post(`${API_URL}/api/message`, {
    session_id: sessionId,
    input: {
      mesage_type: "text",
      text: msg
    }
  });
  return message.data.result;
}

export default { getId, askAssistant };
