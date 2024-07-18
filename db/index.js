const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGO_URL;

const dbConnect = async () => {
  try {
    const atlasConnection = await mongoose.connect(mongoURL, {});

    console.log(
      `connecting to mongodb atlas cluster dungeonbuilder ... ${atlasConnection.connection.host}`
    );
  } catch (error) {
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = dbConnect;
