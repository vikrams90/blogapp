const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db_conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("db connection at Port:", db_conn.connection.port);
  } catch (error) {
    console.log("connection failed", error);
  }
};

module.exports = {
  connectDB,
};
