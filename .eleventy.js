module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./_src/sass/");
  eleventyConfig.addPassthroughCopy("./_src/css");

  return {
    dir: {
      input: "_src",
      output: "_site",
    },
  };
};