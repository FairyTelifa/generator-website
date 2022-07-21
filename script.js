const axios = require("axios");

//const clickThing = function () {
axios
  .get("https://v2.jokeapi.dev/joke/Any?")
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
//};
