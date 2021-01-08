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

const onViewPrompts = function (event) {
  event.preventDefault()
  const form = event.target
  const promptData = getFormFields(form)
  api.viewPrompts()
  .then(ui.viewPromptsSuccess)
  .catch(ui.viewPromptsFailure)
}

const onRandomizePrompts = function (event) {
  const form = event.target
  const promptData = getFormFields(form)
  api.randomizePrompts(promptData)
    .then(ui.randomPromptSuccess)
    .catch(ui.randomPromptFailure)
}

const onUpdatePrompt = function (event) {
  event.preventDefault()
  const form = event.target
  const promptData = getFormFields(form)
  api.updatePrompt(promptData)
  .then(ui.updatePromptSuccess)
  .catch(ui.updatePromptFailure)
}

const onDeletePrompt = function (event) {
  event.preventDefault()
  const form = event.target
  const promptData = getFormFields(form)
  console.log(promptData)
  console.log(promptData.prompt)
  api.deletePrompt(promptData)
  .then(ui.deletePromptSuccess)
  .catch(ui.deletePromptFailure)
}


module.exports = {
  onNewPrompt,
  onViewPrompts,
  onRandomizePrompts,
  onUpdatePrompt,
  onDeletePrompt,
}