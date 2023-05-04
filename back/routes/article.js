const express = require("express");
const router = express.Router();
const Article = require("../models/article");

router.post("/", async (req, res) => {
  try {
    const article = new Article({ ...req.body });
    const savedArticle = await article.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getArticle, (req, res) => {
  res.json(res.article);
});

// UPDATE appointment
router.put("/:id", async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE appointment
router.delete("/:id", getArticle, async (req, res) => {
  try {
    await res.article.remove();
    res.json({ message: "Deleted Article" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single appointment by ID
async function getArticle(req, res, next) {
  let article;
  try {
    article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: "Cannot find Article" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.article = article;
  next();
}

module.exports = router;
