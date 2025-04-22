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
  if (typeof feed === 'undefined' || feed === null) {
    next(new Error('Could not get feed.'));
  }
  res.render('feed', { feed: feeds[feedId], feedId: feedId });
};

export { getFeeds, getFeed };
