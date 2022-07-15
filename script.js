const clickThing = function () {
  const newTest = document.createElement("p");
  newTest.innerText = "test";
  document.getElementById("text").appendChild(newTest);
  console.log();
};

const axios = require("axios");

axios
  .get("https://api.genderize.io?name=ashna")
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
