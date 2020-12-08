const htmlmin = require("html-minifier");

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("markdownify", (markdownString) => {
    const MarkdownIt = require("markdown-it");
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    });

    return md.render(markdownString);
  });

  // Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  //Create collections
  eleventyConfig.addCollection("organizer", function (collection) {
    return collection.getFilteredByTag("organizer").sort(function (a, b) {
      if (b.data.name > a.data.name) return -1;
      else if (b.data.title < a.data.title) return 1;
      else return 0;
    });
  });

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  // Include our static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "data",
    },
  };
};
