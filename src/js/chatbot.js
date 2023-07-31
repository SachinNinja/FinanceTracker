// After designing chat-screen window now adding functionality to it using javascript
// First implementing functionality to chat-icon
// Getting chat-icon element
const chatIcon = document.querySelector(".chat-icon");
// Getting chat-window element
const chatWindow = document.querySelector(".chat-window");

// Implement changeVisiblityOfChatbot() function which wtill toggle the visibility of chatbot
function changeVisiblityOfChatbot() {
  // Getting chat-icon element
  const chatIcon = document.querySelector(".chat-icon");
  // Getting chat-window element
  const chatWindow = document.querySelector(".chat-window");
  // Toggling chat-window With smooth transform
  chatWindow.classList.toggle("active");
}

// After clicking on send button send the text to chat screen
const sendmsg = () => {
  // Getting msg-input element
  const msgInput = document.querySelector(".msg-input");
  // Getting message-text element
  const messageText = document.querySelector(".message-text");
  // Gettning message container element having class message
  const messageContainer = document.querySelector(".message");

  // Getting value of msg-input
  let msgInputValue = msgInput.value;

  // Checking if msgInputValue is empty or not
  if (msgInputValue === "") {
    // If msgInputValue is empty then return
    return;
  }

  displayText(msgInputValue, false);
  displayText(getreply(msgInputValue), true);

  console.log("Send button clicked!");

  // Clearing msgInputValue
  msgInput.value = "";
};

// Implementing a function named display inputText which will display the input text to chat screen
const displayText = (inputText, isReply) => {
  // Gettning message container element having class message
  const messageContainer = document.querySelector(".message");
  // Create a new container div element
  const newContainer = document.createElement("div");
  // Adding message-container class to newContainer
  newContainer.classList.add("message-container");

  // Creating new div element
  const newDiv = document.createElement("span");
  if(isReply){
    // Adding message-text class to newDiv
    newDiv.classList.add("message-text");
  }else{
    // Adding sent-message class to newDiv
    newDiv.classList.add("sent-message");
  }
  // Adding text to newDiv
  newDiv.innerText = inputText;
  // Appending newDiv to message-container
  newContainer.appendChild(newDiv);
  // Appending newContainer to message
  messageContainer.appendChild(newContainer);
};

// Implement getreply() function which will take a string as input and return a string as output
const getreply = (input) => {
    input = input.toLowerCase();
    if(input.includes("hi") || input.includes("hello") || input.includes("hey")){
        return "Hello, How are you?";
    }else if(input.includes("good") || input.includes("fine") || input.includes("great")){
        return "That's great!";
    }else if(input.includes("bad") || input.includes("not good") || input.includes("not fine")){
        return "Oh! What happened?";
    }else if(input.includes("not feeling well") || input.includes("not feeling good") || input.includes("not feeling fine")){
        return "Oh! What happened?";
    }else if(input=="tell me a joke"){
        return "What do you call a fake noodle? An Impasta.";
    }else if(input=="tell me another joke"){
        return "Want to hear a joke about construction? I'm still working on it.";
    }else if(input=="tell me another one"){
        return "What did the buffalo say when his son left? Bison.";
    }
    // implement more else if statements here which are generally asked by user
    else if(input.includes("thank") || input.includes("thanks")){
        return "You're welcome";
    }else if(input.includes("bye") || input.includes("goodbye") || input.includes("see you")){
        return "Bye, See you soon!";
    }else{
        return "I didn't get it";
    }

}
