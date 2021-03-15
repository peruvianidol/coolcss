module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./_src/sass/");
  eleventyConfig.addPassthroughCopy("./_src/css");
  eleventyConfig.addPassthroughCopy("./_src/images");

  return {
    dir: {
      input: "_src",
      output: "_site",
    },
  };
};