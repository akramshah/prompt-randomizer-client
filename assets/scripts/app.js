'use strict'

const authEvents = require("./auth/events");
const promptEvents = require("./prompt/events")
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
 $(".randomizer").hide();
 $(".signout-button").hide();
 $(".prompt-index").hide();
 $(".prompter").hide();
 $(".back").hide();
 $(".user-settings").hide();
 $(".user-settings-button").hide();
 $("#sign-up").on("submit", authEvents.onSignUp); //Sign up button
 $("#sign-in").on("submit", authEvents.onSignIn); //Sign in button
 $("#change-password").on("submit", authEvents.onChangePassword); //Change password button
 $("#sign-out").on("click", authEvents.onSignOut); //Sign out button
 $("#new-prompt").on("submit", promptEvents.onNewPrompt)
 $("#view-prompts").on("click", promptEvents.onViewPrompts)
 $("#hide-prompts").on("click", promptEvents.onHidePrompts)
 $("#random-prompt").on("click", promptEvents.onRandomizePrompts)
 $("#update-prompt").on("submit", promptEvents.onUpdatePrompt)
 $("#delete-prompt").on("submit", promptEvents.onDeletePrompt)
 $(".user-settings-button").on("click", promptEvents.onShowUserSettings)
 $("#back-button").on("click", promptEvents.onBackButton)
})
