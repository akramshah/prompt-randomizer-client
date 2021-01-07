const store = require('./../store')

const createPromptSuccess = function (response) {
  $('#prompt-message').text('Prompt created.')
  response.prompt = store.prompt
  console.log(store.prompt)
}

const createPromptFailure = function (response) {
  $('#prompt-message').text('Prompt creation failed.')
}


const viewPromptsSuccess = function (response) {
  store.prompt = response.prompts
  const userPrompts = store.prompt
  const promptString = JSON.stringify(userPrompts)
  $('#prompt-message').html(promptString)
  console.log(store.prompt)
}

const viewPromptsFailure = function (response) {
  $('#prompt-message').text('Cannot view prompts.')
}

module.exports = {
  createPromptSuccess,
  createPromptFailure,
  viewPromptsSuccess,
  viewPromptsFailure
}