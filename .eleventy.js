const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Watch scss folder for changes
  eleventyConfig.addWatchTarget("./_src/assets/scss/");

  // Set directories to pass through to the _site folder
  eleventyConfig.addPassthroughCopy("./_src/assets/images");

  // Add syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // shortcode for inserting the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // convert date to [Month DD, YYYY], set timezone to UTC to ensure date is not off by one
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'America/Chicago'}).toLocaleString(DateTime.DATE_FULL);
  });

  // add anchor links to heading text
  eleventyConfig.addPairedShortcode("anchor", function(content) {
    return `
    <h3 class="cool-heading-2">
    <a id="${eleventyConfig.getFilter('slug')(content)}" href="#${eleventyConfig.getFilter('slug')(content)}" class="cool-anchor" aria-hidden="true">
    ${content}
    </a>
    </h3>`
  });

  return {
    dir: {
      input: "_src",
      output: "_site",
    },
    // set default template engine to Nunjucks
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};