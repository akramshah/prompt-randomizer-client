const api = require("./api");
const ui = require("./ui");
const store = require("./../store");
const getFormFields = require("./../../../lib/get-form-fields.js");

const onNewPrompt = function (event) {
  event.preventDefault()
  const form = event.target
  const promptData = getFormFields(form)
  // console.log(promptData)
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
  // console.log(promptData)
  // console.log(promptData.prompt)
  api.deletePrompt(promptData)
    .then(ui.deletePromptSuccess)
    .catch(ui.deletePromptFailure)
}

const onShowUserSettings = function (event) {
  $(".back").show();
  $(".user-settings").show();
  $(".prompter").hide();
  $("#prompt-message").html('');
  $(".user-settings-button").hide();
  $(".randomizer").hide()
  $(".auth-message").hide()
  $("#update-prompt").hide()
  $("#delete-prompt").hide()
  $("#change-password").hide()
}

const onBackButton = function (event) {
  $(".user-settings").hide();
  $(".prompter").show();
  $(".randomizer").show();
  $(".user-settings-button").show();
  $(".auth-message").hide()
  $(".back").hide();
  $("#prompt-message").html('');
  $("#prompt-display").hide();
  $("#new-prompt").hide();
  $("#submit-prompts").show();
}

const onUpdateButton = function (event) {
  $("#update-prompt").show()
  $("#delete-prompt").hide()
  $("#change-password").hide()
}

const onDeleteButton = function (event) {
  $("#update-prompt").hide()
  $("#delete-prompt").show()
  $("#change-password").hide()
}

const onChangepwButton = function (event) {
  $("#update-prompt").hide()
  $("#delete-prompt").hide()
  $("#change-password").show()
}

const onHidePrompts = function (event) {
  $("#prompt-display").html('');
}

const onSubmitButton = function (event) {
  $("#new-prompt").show();
  $("#submit-prompts").hide();
}


module.exports = {
  onNewPrompt,
  onViewPrompts,
  onRandomizePrompts,
  onUpdatePrompt,
  onDeletePrompt,
  onShowUserSettings,
  onBackButton,
  onHidePrompts,
  onUpdateButton,
  onDeleteButton,
  onChangepwButton,
  onSubmitButton
}
