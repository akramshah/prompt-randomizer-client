const api = require("./api");
const ui = require("./ui");
const store = require("./../store");
const getFormFields = require("./../../../lib/get-form-fields.js");

const onNewPrompt = function (event) {
  event.preventDefault()
  const form = event.target
  const promptData = getFormFields(form)
  console.log(promptData)
  api.createPrompt(promptData)
  .then(ui.newPromptSuccess)
  .catch(ui.newPromptFailure)
} 

module.exports = {
  onNewPrompt
}