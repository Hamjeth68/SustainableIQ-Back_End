import Mongoose from "mongoose";

var postSchema = Mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  position: { type: String, required: true },
  compnayName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var postSchema = Mongoose.model("postSchema", postSchema);

export default postSchema;
