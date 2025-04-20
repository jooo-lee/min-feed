import Parser from 'rss-parser';

const parser = new Parser();

const initFeed = async () => {
  try {
    return await parser.parseURL('https://avas.bearblog.dev/feed/?type=rss');
  } catch {
    throw new Error('Could not retrieve feed.');
  }
};

export { initFeed };
