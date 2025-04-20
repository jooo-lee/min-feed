import Parser from 'rss-parser';

const parser = new Parser();
const feedSources = [
  'https://sorbier.neocities.org/blog/feed.xml',
  'https://avas.bearblog.dev/feed/?type=rss',
];

const initFeeds = async () => {
  const feeds = [];
  for (const source of feedSources) {
    try {
      const feed = await parser.parseURL(source);
      feeds.push(feed);
    } catch {
      throw new Error('Could not retrieve feed.');
    }
  }
  return feeds;
};

export { initFeeds };
