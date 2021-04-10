const mongoose = require("mongoose");
const config = require("config");
// const DB =
//   "mongodb+srv://sacmongo:Sacdb@786@test.ukunm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const db =config.get('mongoURI');
// console.log(db);
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("MongodDb Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
