import Mongoose from "mongoose";

var adminSchema = Mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var adminSchema = Mongoose.model("adminSchema", adminSchema);

export default adminSchema;
