const { Post, City } = require('../models');

async function index(req, res) {
  console.log('Hit posts Index controller');

  try {
    const allPosts = await Post.find();
    res.send(allPosts);
  } catch(err) {
    console.log(err);
    res.send(500);
  }

  // Post.find()
  //   .then((allPosts) => {
  //     res.send(allPosts);
  //   });
}

async function show(req, res) {
  console.log('Hit posts show controller');

  try { 
    const foundPost = await Post.findById(req.params.postId).populate('city').exec();
    res.send(foundPost);
  } catch(err) {
    console.log(err);
    res.send(500);
  }

  // Post.findById(req.params.postId)
  //   .then((foundPost) => {
  //     res.send(foundPost);
  //   });

  // Post.findById(req.params.postId, (err, foundPost) => {
  //   if (err) {
  //     res.status(500);
  //     console.log(err);
  //   }
  //   res.send(foundPost);
  // });
}

async function create(req, res) {
  console.log('Hit posts create controller');
  const newPost = { city, postTitle, postBody, postImg } = req.body;

  try {
    const createdPost = await Post.create(newPost);
    
    // Add post id to city model
    const updatedCity = await City.findByIdAndUpdate(
      createdPost.city,
      { $push: { posts: createdPost._id } },
      { new: true }
    );

    res.send(createdPost);
  } catch(err) {
    console.log(err);
    res.send(500);
  }
}

async function update(req, res) {
  console.log('hit update controller');

  const postUpdates = { city, title, body, postImg } = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      postUpdates,
      { new: true }
    );
    res.send(updatedPost);

  } catch(err) {
    console.log(err);
    res.send(500);
  }
}

async function remove(req, res) {
  console.log('Hit delete create controller');
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.postId);
    res.send(removedPost);
  } catch(err) {
    console.log(err);
    res.send(500);
  }
}

module.exports = {
  index,
  create,
  update,
  remove,
  show
};
