const {
  data
} = require("jquery");
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

const randomizePrompts = function (promptData) {
  return $.ajax({
    url: config.apiUrl + "/prompts/all",
    method: "GET",
    data: promptData,
    headers: {
      Authorization: "Bearer " + store.user.token,
    },
  });
};

const updatePrompt = function (promptData) {
  return $.ajax({
    url: config.apiUrl + '/prompts/' + promptData.prompt._id,
    method: 'PATCH',
    data: promptData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
  })
}

const deletePrompt = function (promptData) {
  return $.ajax({
    url: config.apiUrl + '/prompts/' + promptData.prompt._id,
    method: 'DELETE',
    data: promptData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
  })
}

module.exports = {
  createPrompt,
  viewPrompts,
  randomizePrompts,
  updatePrompt,
  deletePrompt
}
