import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin-dhanraj:runboyrun@cluster0.nhldk9d.mongodb.net/"
    );
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectToDB;
