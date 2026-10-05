export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin");
  return { dir: { input: "src", output: "_site", includes: "_includes" } };
}
