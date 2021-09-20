import postUser from "../models/postUser.js";
import adminSchema from "../models/adminUser.js";

export const getApi = async (req, res) => {
  try {
    postUser
      .find()
      .exec()
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        }
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const adminCreate = async (req, res) => {
  try {
    const admin = req.body;
    const newAdmin = new adminSchema(admin);

    newAdmin.firstName = req.body.firstName;
    newAdmin.secondName = req.body.secondName;

    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const post = req.body;

    const newPost = new postUser(post);
    newPost.firstName = req.body.firstName;
    newPost.secondName = req.body.secondName;
    newPost.position = req.body.position;
    newPost.compnayName = req.body.compnayName;
    newPost.contactNumber = req.body.contactNumber;
    newPost.email = req.body.email;

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
