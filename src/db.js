import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://root:RDG90ETlogGgZUb0@cluster0.rhjwj.mongodb.net/messages?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB CONNECTED!");
  })
  .catch((err) => console.log(err));
