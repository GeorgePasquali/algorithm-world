const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  traitId: {
    type: Number,
    required: true
  },
  articleDescription: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  cCode: {
    type: String,
    default: `

    `
  },
  jsCode: {
    type: String,
    default: `
    code": "stdout += 'HELLOOOOOOOOOOOOOOO'
    `
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);