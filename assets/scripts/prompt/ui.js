const store = require('./../store')

const createPromptSuccess = function (response) {
  $('#prompt-message').text('Prompt created.')
  response.prompt = store.prompt
  console.log(store.prompt)
}

const createPromptFailure = function (response) {
  $('#prompt-message').text('Prompt creation failed.')
}

module.exports = {
  createPromptSuccess,
  createPromptFailure,
}