const store = require('./../store')

const newPromptSuccess = function (response) {
  response.prompt = store.prompt
  $("#prompt-message").text('Prompt created.')
  $(".auth-message").hide()
  console.log(store.prompt)
  $('form').trigger('reset')
}

const newPromptFailure = function (error) {
  $('#prompt-message').html('Prompt creation failed.')
}


const viewPromptsSuccess = function (response) {
  store.prompt = response.prompt
  const userPrompts = store.prompt
  const promptString = JSON.stringify(userPrompts)
  $('#prompt-message').html(promptString)
  console.log(store.prompt)
}

const viewPromptsFailure = function (error) {
  $('#prompt-message').html('Cannot view prompts.')
}

const randomPromptSuccess = function (response) {
  $("#auth-message").hide()
  store.prompt = response.prompt
  console.log(store.prompt)
  const userPrompts = store.prompt
  const randomize = function () {
    let randomPrompt = userPrompts[Math.floor(Math.random() * userPrompts.length)];
    const randomPromptString = JSON.stringify(randomPrompt)
    $('#prompt-message').html(randomPromptString)
    console.log(randomPrompt)
  }
   randomize()
  // console.log(userPrompts)
}

const randomPromptFailure = function (error) {
  $('#prompt-message').text('Cannot view prompts.')
}

const updatePromptSuccess = function (response) {
    store.prompt = response.prompt
    const updatedPrompt = store.prompt
    const promptString = JSON.stringify(updatedPrompt)
    console.log(promptString)
    $('#prompt-message').html('Updated: ' + promptString)
    $('form').trigger('reset')
}

const updatePromptFailure = function (error) {
  $('#prompt-message').text('Cannot update prompt. Please check if ID is correct.')
}

const deletePromptSuccess = function (response) {
  $('#prompt-message').text('Prompt deleted.')
  $('form').trigger('reset')
}

const deletePromptFailure = function (error) {
  $('#prompt-message').text('Could not delete prompt. Try again with correct ID.')
}

module.exports = {
  newPromptSuccess,
  newPromptFailure,
  viewPromptsSuccess,
  viewPromptsFailure,
  randomPromptSuccess,
  randomPromptFailure,
  updatePromptSuccess,
  updatePromptFailure,
  deletePromptSuccess,
  deletePromptFailure
}