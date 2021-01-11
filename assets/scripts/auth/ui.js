const store = require('./../store')

const signUpSuccess = function (response) {
  $(".sign-up").show();
  $(".sign-in").show();
  $('#unauthenticated-message').text('Signed up successfully.')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('.auth-message').text('Sign-up failed. Error: ' + error.responseJSON.message)
}
const signInSuccess = function (response) {
  $("#new-prompt").hide();
  $("#submit-prompts").show();
  $('.sign-up').hide();
  $('.sign-in').hide();
  $(".signout-button").show();
  $(".auth-message").show()
  $('.auth-message').text('Signed in successfully.')
  $(".prompt-index").show();
  $(".prompter").show();
  $(".randomizer").show();
  $(".user-settings-button").show();
  $(".header-buttons").show();
  $(".blurb").hide();
  store.user = response.user
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#unauthenticated-message').text('Sign in failed. Error: ' + error.responseJSON.message)
}

const changePasswordSuccess = function (response) {
  $('#prompt-display').html('Password changed successfully.')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $(".auth-message").show()
  $('.auth-message').text('Password change failed. Error: ' + error.responseJSON.message)
}

const signOutSuccess = function (response) {
  $(".sign-up").show();
  $(".sign-in").show();
  $('#unauthenticated-message').text('Signed out successfully.')
  $(".prompter").hide();
  $(".prompt-index").hide();
  $(".signout-button").hide();
  $(".user-settings").hide();
  $(".user-settings-button").hide();
  $(".randomizer").hide();
  $(".back").hide();
  $("#prompt-message").text('')
  $(".auth-message").show()
  $('.auth-message').text('')
  $(".blurb").show();
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $(".auth-message").show()
  $('.auth-message').text('Sign out failed. Error: ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
