const { data } = require("jquery");
const config = require("./../config");
const store = require("./../store");

const createPrompt = function (promptData) {
  return $.ajax({
    url: config.apiUrl + "/prompts",
    method: "POST",
    headers: {
      Authorization: "Bearer " + store.user.token,
    },
    data: promptData
  });
};

module.exports = {
  createPrompt
}