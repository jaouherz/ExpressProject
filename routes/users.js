const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save;
    res.status(201).send({ message: "User saved successfully", user });
    res.status(201).send({ message: "User saved successfully", user });
  } catch (error) {
    res.status(400);
  }
});
module.exports = router;