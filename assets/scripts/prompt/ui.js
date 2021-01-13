const store = require("./../store");

const newPromptSuccess = function (response) {
  $("#new-prompt").hide();
  $("#submit-prompts").show();
  store.prompt = response.prompt;
  const newPrompt = store.prompt;
  $("#prompt-message").html(`
    <div>
    <p><b>Created:</b></p>
    <p><b>Title: ${newPrompt.title}</b></p>
    <p>ID: ${newPrompt._id}</p>
    <p>Description: ${newPrompt.description}</p>
    
   `);
  $(".auth-message").hide();
  // console.log(store.prompt)
  $("form").trigger("reset");
};

const newPromptFailure = function (error) {
  $(".auth-message").hide();
  $("#prompt-message").html("Prompt creation failed.");
};

const viewPromptsSuccess = function (response) {
  $("#prompt-display").show();
  store.prompt = response.prompt;
  const userPrompts = store.prompt;
  let promptsHtml = "";
  if (userPrompts.length === 0) {
        const promptHtml = `
    <div>
    <p><b>No prompts to display. Please submit a prompt.</b></p>
    `;
    promptsHtml += promptHtml;
  ;
  $(".auth-message").hide();
  $("#prompt-display").html(promptsHtml);
} else {
  userPrompts.forEach(function (prompt) {
    const promptHtml = `
    <div>
    <p><b>Title: ${prompt.title}</b></p>
    <p>ID: ${prompt._id}</p>
    <p>Description: ${prompt.description}</p>
    </div>
    `;
    promptsHtml += promptHtml;
  });
  $(".auth-message").hide();
  $("#prompt-display").html(`<h6><b>Your Prompts:<h6><br>`
   + promptsHtml);
  // console.log(store.prompt)
}
}

const viewPromptsFailure = function (error) {
  $(".auth-message").hide();
  $("#prompt-message").html("Cannot view prompts.");
};

const randomPromptSuccess = function (response) {
  $(".auth-message").hide();
  store.prompt = response.prompt;
  // console.log(store.prompt)
  const userPrompts = store.prompt;
  const randomize = function () {
    let randomPrompt =
      userPrompts[Math.floor(Math.random() * userPrompts.length)];
    $("#prompt-message").html(`
    <div>
    <p><b>Title: ${randomPrompt.title}</b></p>
    <p>ID: ${randomPrompt._id}</p>
    <p>Description: ${randomPrompt.description}</p>
    </div>
    `);
    console.log(randomPrompt);
  };
  randomize();
  // console.log(userPrompts)
};

const randomPromptFailure = function (error) {
  $(".auth-message").hide();
  $("#prompt-message").text("Cannot view prompts.");
};

const updatePromptSuccess = function (response) {
  store.prompt = response.prompt;
  const updatedPrompt = store.prompt;
  // console.log(promptString)
  $(".auth-message").hide();
  $("#prompt-display").html(`
    <div>
    <p><b>Updated:</b></p>
    <p><b>Title: ${updatedPrompt.title}</b></p>
    <p>ID: ${updatedPrompt._id}</p>
    <p>Description: ${updatedPrompt.description}</p>
    </div>
   `);
  $("form").trigger("reset");
};

const updatePromptFailure = function (error) {
  $(".auth-message").hide();
  $("#prompt-display").text(
    "Cannot update prompt. Please check if ID is correct."
  );
};

const deletePromptSuccess = function (response) {
  $(".auth-message").hide();
  $("#prompt-display").text("Prompt deleted.");
  $("form").trigger("reset");
};

const deletePromptFailure = function (error) {
  $(".auth-message").hide();
  $("#prompt-display").text(
    "Could not delete prompt. Try again with correct ID."
  );
};

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
  deletePromptFailure,
};
