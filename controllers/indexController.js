import Parser from 'rss-parser';

const parser = new Parser();
let feed;

const getFeed = async (req, res, next) => {
  try {
    feed = await parser.parseURL('https://avas.bearblog.dev/feed/?type=rss');
    res.render('feed', { feed: feed });
  } catch {
    next(new Error('Could not get feed.'));
  }
};

const getPost = async (req, res, next) => {
  try {
    const item = feed.items[req.params.id];
    res.render('post', { item: item });
  } catch {
    next(new Error('Could not get post.'));
  }
};

export { getFeed, getPost };
