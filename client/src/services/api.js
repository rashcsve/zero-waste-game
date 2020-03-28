import axios from "axios";

// TODO: Add proxy / env
const API_URL = "http://localhost:3000/";

async function getId() {
  const sessionId = await axios.get(`${API_URL}api/session`);
  return sessionId.data.result.session_id;
}

async function askAssistant(msg, sessionId) {
  console.log(sessionId);
  const message = await axios.post(`${API_URL}api/message`, {
    session_id: sessionId,
    input: {
      message_type: "text",
      text: msg
    }
  });
  return message.data.result;
  // if (res.data.output.generic[0]) {
  //   this.watsonResponse = res.data.output.generic[0].text;
  //   if (res.data.output.generic[1]) {
  //     this.watsonResponse =
  //       this.watsonResponse + " " + res.data.output.generic[1].text;
  //   }
  // }
}

export default { getId, askAssistant };
