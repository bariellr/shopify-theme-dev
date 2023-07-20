let mix = require("laravel-mix");

require("laravel-mix-tailwind");

mix.js("src/js/main.js", "shopify/assets/bundle.js")
    .css("src/css/main.css", "shopify/assets/bundle.css")
    .tailwind();
