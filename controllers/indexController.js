import { initFeed } from '../helpers/initFeed.js';

let feed;
(async () => {
  feed = await initFeed();
})();

const getFeed = async (req, res, next) => {
  if (typeof feed === 'undefined' || feed === null) {
    next(new Error('Could not get feed.'));
  }
  res.render('feed', { feed: feed });
};

const getPost = async (req, res, next) => {
  if (typeof feed === 'undefined' || feed === null) {
    next(new Error('Could not get feed.'));
  } else if (
    typeof feed.items[req.params.id] === 'undefined' ||
    feed.items[req.params.id] === null
  ) {
    next(new Error('Could not get post.'));
  }
  try {
    const item = feed.items[req.params.id];
    res.render('post', { item: item });
  } catch (err) {
    next(new Error('Could not get post.'));
  }
};

export { getFeed, getPost };
