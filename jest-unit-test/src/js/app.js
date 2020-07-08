require("!style-loader!css-loader!../css/styles.css");
const arr = require("./script2");
const $ = require("jquery");

$.each(arr, (key, value) => {
  $("body").append(`<h4>${arr[key].name}</h4>`);
});
