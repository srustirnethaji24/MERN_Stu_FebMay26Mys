const Post = require('../models/Post');
const User = require('../models/User');
const AppError = require('../utils/appError');

exports.createPost = async (req, res, next) => {
  try {
    const { content } = req.body;
    
    if (!content?.trim()) {
      return next(new AppError('Post content is required', 400));
    }

    const post = await Post.create({
      author: req.user.id,
      content
    });

    await post.populate('author', 'name headline');

    res.status(201).json({ success: true, post });
  } catch (error) {
    next(error);
  }
};

exports.getFeed = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const connectionIds = user.connections.map(c => c.toString());
    connectionIds.push(req.user.id);

    const { limit = 10, page = 1 } = req.query;

    const posts = await Post.find({ author: { $in: connectionIds } })
      .populate('author', 'name headline')
      .populate('comments.user', 'name')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.json({ success: true, count: posts.length, posts });
  } catch (error) {
    next(error);
  }
};

exports.likePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return next(new AppError('Post not found', 404));

    if (post.likes.includes(req.user.id)) {
      return next(new AppError('Already liked this post', 400));
    }

    post.likes.push(req.user.id);
    await post.save();

    res.json({ success: true, message: 'Post liked', likesCount: post.likes.length });
  } catch (error) {
    next(error);
  }
};

exports.commentOnPost = async (req, res, next) => {
  try {
    const { text } = req.body;
    if (!text?.trim()) {
      return next(new AppError('Comment text is required', 400));
    }

    const post = await Post.findById(req.params.id);
    if (!post) return next(new AppError('Post not found', 404));

    post.comments.push({ user: req.user.id, text });
    await post.save();

    await post.populate('comments.user', 'name');

    res.json({ success: true, message: 'Comment added', post });
  } catch (error) {
    next(error);
  }
};

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()
      .populate('author', 'name headline')
      .sort({ createdAt: -1 });
    
    res.json({ success: true, count: posts.length, posts });
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return next(new AppError('Post not found', 404));

    if (post.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(new AppError('Not authorized to delete this post', 403));
    }

    await Post.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Post deleted' });
  } catch (error) {
    next(error);
  }
};