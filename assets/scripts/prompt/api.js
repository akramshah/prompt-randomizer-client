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

const viewPrompts = function (promptData) {
  return $.ajax({
    url: config.apiUrl + "/prompts",
    method: "GET",
    data: promptData,
    headers: {
      Authorization: "Bearer " + store.user.token,
    },
  });
  };

module.exports = {
  createPrompt,
  viewPrompts
}