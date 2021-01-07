'use strict'

const authEvents = require("./auth/events");
const promptEvents = require("./prompt/events")
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
 $("#sign-up").on("submit", authEvents.onSignUp); //Sign up button
 $("#sign-in").on("submit", authEvents.onSignIn); //Sign in button
 $("#change-password").on("submit", authEvents.onChangePassword); //Change password button
 $("#sign-out").on("click", authEvents.onSignOut); //Sign out button
 $("#new-prompt").on("submit", promptEvents.onNewPrompt)
})
