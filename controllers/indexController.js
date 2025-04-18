import Parser from 'rss-parser';
import expressAsyncHandler from 'express-async-handler';
const parser = new Parser();

const getFeed = expressAsyncHandler(async (req, res) => {
  // const feed = await parser.parseURL('https://www.reddit.com/.rss');
  const feed = await parser.parseURL(
    'https://avas.bearblog.dev/feed/?type=rss'
  );
  console.log(feed.title);
  console.log('\n');

  feed.items.slice(0, 3).forEach((item) => {
    console.log(item.title + ':' + item.link);
    console.log('\n');
  });

  res.send(feed.title);
});

export { getFeed };
