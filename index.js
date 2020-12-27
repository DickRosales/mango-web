const headingEl = document.querySelector('#heading');
const textEl = document.querySelector('#textInput');
const buttonEl = document.querySelector('#buttonInput');

// Called when the user clicks the button
buttonEl.addEventListener('click', (event) => {
  // getting the text from the input
  const inputText = textEl.value;
  
  // updating the text inside the heading
  headingEl.innerHTML = inputText;


  window.location.href = 'https://google.com/';
});
