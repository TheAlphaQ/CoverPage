const mongoose = require("mongoose");

const connectDatabase = () => {
  // in the connect function, there's a property {useCreateIndex: true,} which has been deleted because it is deprecated

  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => console.error(err));
};

module.exports = connectDatabase;
