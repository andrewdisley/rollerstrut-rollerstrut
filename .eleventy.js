const htmlmin = require('html-minifier');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ 'src/static/': '/' });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        processScripts: ['text/javascript'],
        useShortDoctype: true,
        removeComments: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      output: 'dist',
    },
    htmlTemplateEngine: 'njk',
  };
};
