import { initFeeds } from '../helpers/initFeeds.js';

let feeds;
(async () => {
  feeds = await initFeeds();
})();

const getFeeds = async (req, res, next) => {
  if (typeof feeds === 'undefined' || feeds === null) {
    next(new Error('Could not get feeds.'));
  }
  res.render('feeds', { feeds: feeds });
};

const getFeed = async (req, res, next) => {
  const feedId = req.params.feedId;
  const feed = feeds[feedId];
  if (feed === 'undefined' || feed === null) {
    next(new Error('Could not get feed.'));
  }
  res.render('feed', { feed: feeds[feedId], feedId: feedId });
};

const getPost = async (req, res, next) => {
  const feed = feeds[req.params.feedId];
  const post = feed['items'][req.params.postId];
  if (feed === 'undefined' || feed === null) {
    next(new Error('Could not get feed.'));
  } else if (post === 'undefined' || post === null) {
    next(new Error('Could not get post.'));
  }
  try {
    res.render('post', { post: post });
  } catch (err) {
    next(new Error('Could not get post.'));
  }
};

export { getFeeds, getFeed, getPost };
