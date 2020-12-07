import Message from "../../models/Message";

const Query = {
  messages: async () => await Message.find(),
};
export default Query;
