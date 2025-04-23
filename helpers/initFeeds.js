import Parser from 'rss-parser';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const parser = new Parser();

const loadFeeds = async (feeds, urls) => {
  for (const url of urls) {
    try {
      const feed = await parser.parseURL(url);
      feeds.push(feed);
    } catch {
      throw new Error(`Could not retrieve feed with url: ${url}.`);
    }
  }
};

const initFeeds = async () => {
  let urls;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const urlsFilePath = path.join(__dirname, '..', 'urls.txt');

  const feeds = [];
  fs.readFile(urlsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      throw new Error('Could not read from urls.txt.');
    }

    // Trim newline character at EOF
    urls = data.trim().split('\n');

    loadFeeds(feeds, urls);
  });
  return feeds;
};

export { initFeeds };
