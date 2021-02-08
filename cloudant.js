const cloudant = require("@cloudant/cloudant")(
  {
    url: process.env.CLOUDANT_URL,
    plugins: { iamauth: { iamApiKey: process.env.CLOUDANT_API_KEY } }
  },
  (err, cloudant) => {
    if (err) {
      return console.log("Failed to initialize Cloudant: " + err.message);
    }

    console.log("Cloudant initialized...");
  }
);
module.exports = cloudant;