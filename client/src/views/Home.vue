<template>
  <div class="home">
    <Test />
    {{ message }}
  </div>
</template>

<script>
import Test from "@/components/Test";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Test
  },
  data() {
    return {
      sessionId: null,
      message: null
    };
  },
  async created() {
    await this.getId();
    await this.askAssistant("");
  },
  methods: {
    async getId() {
      this.sessionId = await axios.get("http://localhost:3000/api/session");
      // this.sessionId = data.result.session_id;
      // await this.askAssistant("", sess.data.result.session_id);
    },
    askAssistant(msg) {
      console.log(this.sessionId)
      axios
        .post("http://localhost:3000/api/message", {
          session_id: this.sessionId.data.result.session_id,
          input: {
            message_type: "text",
            text: msg
          },
          global: {
            system: {
              turn_count: 1
            }
          }
        })
        .then(res => {
          console.log(res.data);
          this.message = res.data.result.output;
          // if (res.data.output.generic[0]) {
          //   this.watsonResponse = res.data.output.generic[0].text;
          //   if (res.data.output.generic[1]) {
          //     this.watsonResponse =
          //       this.watsonResponse + " " + res.data.output.generic[1].text;
          //   }
          // }
        });
    }
  }
};
</script>
