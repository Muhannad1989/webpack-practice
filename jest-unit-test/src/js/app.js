require("!style-loader!css-loader!../css/styles.css");
require("!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css");
const arr = require("./script2");
const { text } = require("./script2");
const $ = require("jquery");

$.each(arr, (key, value) => {
  $("body").append(`<h4>${arr[key].name}</h4>`);
});

$("body").append(`<p>${text}</p>`);
