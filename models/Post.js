const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true
  },
  postTitle: {
    type: String,
    required: true
  },
  postBody: {
    type: String,
    required: true
  },
  postImg: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
