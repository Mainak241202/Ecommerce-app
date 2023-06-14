import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster1.zgh9akl.mongodb.net/Shopping`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the databse", error.message);
  }
};
