import mongoose from "mongoose";


// this is for production ...... 

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



// this is for development mode ......

/*
export const Connection = async () => {
  try {
    const url = 'mongodb://127.0.0.1:27017/Ecommerce-app';
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

*/
