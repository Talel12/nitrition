const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ArticleSchema = new schema(
  {
    img: {
      type: String,
      default:
        "https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/ava-1.png",
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    source: {
      type: String,
    },
  },
  { timestamps: true }
);

const Article = mongoose.model("article", ArticleSchema);

module.exports = Article;
