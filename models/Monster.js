const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  alignment: {
    type: String,
  },
  img_main: {
    type: String,
    required: true,
  },
  challenge_rating: {
    type: Number,
    required: false,
  },
});

module.exports = Monster = mongoose.model('Monster', MonsterSchema);
