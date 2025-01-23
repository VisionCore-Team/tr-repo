const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/verify-recaptcha", async (req, res) => {
  const { recaptchaValue } = req.body;  // Getting recaptcha value

  if (!recaptchaValue) {
    return res.status(400).send("reCAPTCHA не был пройден.");
  }

  
  const secretKey = process.env.SITE_SECRET;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: recaptchaValue,
        },
      }
    );

    if (response.data.success) {
      res.status(200).send("reCAPTCHA check has been successfully");
    } else {
      res.status(400).send("Error during reCAPTCHA check");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});
