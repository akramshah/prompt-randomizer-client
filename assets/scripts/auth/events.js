const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  //console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  //console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  //console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

//Sign out event
const onSignOut = function (event) {
  const form = event.target
  const data = getFormFields(form)
  //console.log(data)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}