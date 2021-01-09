const store = require('./../store')

const newPromptSuccess = function (response) {
  store.prompt = response.prompt
  const newPrompt = store.prompt
  $("#prompt-message").html(`
    <div>
    <h5>Created:</h5>
    <h6>Title: ${newPrompt.title}</h5>
    <p>ID: ${newPrompt._id}</p>
    <p>Description: ${newPrompt.description}</p>
    
   `)
  $(".auth-message").hide()
  console.log(store.prompt)
  $('form').trigger('reset')
}

const newPromptFailure = function (error) {
  $(".auth-message").hide()
  $('#prompt-message').html('Prompt creation failed.')
}


const viewPromptsSuccess = function (response) {
  store.prompt = response.prompt
  const userPrompts = store.prompt
  let promptsHtml = ''
  userPrompts.forEach(function (prompt) {
    const promptHtml = (`
    <div>
    <h5>Title: ${prompt.title}</h5>
    <p>ID: ${prompt._id}</p>
    <p>Description: ${prompt.description}</p>
    
    `)
    promptsHtml += promptHtml
  })
  // const promptString = JSON.stringify(userPrompts)
  $(".auth-message").hide()
  $('#prompt-message').html(promptsHtml)
  console.log(store.prompt)
}

const viewPromptsFailure = function (error) {
  $(".auth-message").hide()
  $('#prompt-message').html('Cannot view prompts.')
}

const randomPromptSuccess = function (response) {
  $(".auth-message").hide()
  store.prompt = response.prompt
  console.log(store.prompt)
  const userPrompts = store.prompt
  const randomize = function () {
    let randomPrompt = userPrompts[Math.floor(Math.random() * userPrompts.length)];
    $('#prompt-message').html(`
    <div>
    <h5>Title: ${randomPrompt.title}</h5>
    <p>ID: ${randomPrompt._id}</p>
    <p>Description: ${randomPrompt.description}</p>
    
    `)
    console.log(randomPrompt)
  }
   randomize()
  // console.log(userPrompts)
}

const randomPromptFailure = function (error) {
  $(".auth-message").hide()
  $('#prompt-message').text('Cannot view prompts.')
}

const updatePromptSuccess = function (response) {
    store.prompt = response.prompt
    const updatedPrompt = store.prompt
    // const promptString = JSON.stringify(updatedPrompt)
    // console.log(promptString)
    $(".auth-message").hide()
    $('#prompt-message').html(`
    <div>
    <h5>Updated:</h5>
    <h6>Title: ${updatedPrompt.title}</h5>
    <p>ID: ${updatedPrompt._id}</p>
    <p>Description: ${updatedPrompt.description}</p>
    
   `)
    $('form').trigger('reset')
}

const updatePromptFailure = function (error) {
  $(".auth-message").hide()
  $('#prompt-message').text('Cannot update prompt. Please check if ID is correct.')
}

const deletePromptSuccess = function (response) {
  $(".auth-message").hide()
  $('#prompt-message').text('Prompt deleted.')
  $('form').trigger('reset')
}

const deletePromptFailure = function (error) {
  $(".auth-message").hide()
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