import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

// https://nuxt.com/docs/getting-started/deployment#static-hosting
// https://nuxt.com/docs/guide/concepts/server-engine
// https://content.nuxt.com/recipes/sitemap
// https://nuxt.com/docs/guide/directory-structure/server#server-directory

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: "http://localhost:3000",
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "monthly",
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});

// http://localhost:3000/sitemap.xml
// npm run generate
// npx serve .output/public
