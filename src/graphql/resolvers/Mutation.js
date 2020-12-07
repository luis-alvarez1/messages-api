import Message from "../../models/Message";

const Mutation = {
  createMessage: async (_, args) => {
    const { input } = args;
    console.log(input);
    const newMessage = new Message(input);
    return await newMessage.save();
  },
};

export default Mutation;
