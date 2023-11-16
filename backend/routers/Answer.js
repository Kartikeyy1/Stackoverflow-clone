const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
// const mongoose = require('mongoose')
const answerDB = require("../models/Answer");


router.post("/", async (req, res) => {
    const answerData = new answerDB({
      question_id: req.body.question_id,
      answer: req.body.answer,
      user: req.body.user,
    });
  
    await answerData
      .save()
      .then((doc) => {
        res.status(201).send(doc);
      })
      .catch((err) => {
        res.status(400).send({
          message: "Answer not added successfully",
        });
      });
  });


router.get("/",async(req,res)=>{
  
})
  
  module.exports = router;