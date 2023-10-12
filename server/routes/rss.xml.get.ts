import { serverQueryContent } from "#content/server";
import RSS from "rss";

export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/xml");

  const feed = new RSS({
    title: "Sigve Hansen",
    site_url: "https://sigveh.com",
    feed_url: "https://sigveh.com/rss.xml",
  });

  const posts = await serverQueryContent(event)
    .where({ _path: { $contains: "/posts" } })
    .sort({ date: -1 })
    .find();

  for (const post of posts) {
    feed.item({
      title: post.title!,
      url: `https://sigveh.com/posts/${post._path}`,
      description: post.description,
      date: post.date,
    });
  }

  const feedString = feed.xml({ indent: true });
  return feedString;
});
