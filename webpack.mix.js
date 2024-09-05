/**
 * Docs: https://laravel-mix.com/docs/6.0/installation
 * @type {(function(*=): {postcssPlugin: string, plugins})|{postcss?: boolean}}
 */

// Import required build packages
let tailwindcss = require("tailwindcss");
let mix = require("laravel-mix");

// Javascript & Vue files
mix
  .js("./public/js/app.js", "./dist/js/app.min.js")
  .vue({ version: 2 })
  // CSS files
  .sass("./public/scss/base.scss", "./dist/css/base.css")
  .sass("./public/scss/plugins.scss", "./dist/css/plugins.css")
  .sass("./public/scss/breakpoints.scss", "./dist/css/breakpoints.css")
  .sass("./public/scss/app.scss", "./dist/css/app.css")

  // Options
  .sourceMaps()
  .options({
    processCssUrls: false,
    postCss: [
      require("autoprefixer"), // auto prefix
      require("postcss-pxtorem")({
        // convert all pixel values to rem
        rootValue: 16,
        propList: ["*"],
      }),
      tailwindcss("./public/js/tailwind.config.js"), // import tailwind config
    ],
    clearConsole: true,
    publicPath: "public",
  });
