const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./_src/sass/");
  eleventyConfig.addPassthroughCopy("./_src/css");
  eleventyConfig.addPassthroughCopy("./_src/images");

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "_src",
      output: "_site",
    },
  };
};