let textarea = document.querySelector(".area__text");
let bold = document.querySelector(".section__menu__button");

let selectedText;

textarea.addEventListener('mouseup', () => {
  const selection = window.getSelection();
  const selectedText = selection.toString();
  if (selectedText !== '') {
    console.log(selectedText);
  }
});


bold.addEventListener("click", () => {
    selectedText.classList.add('.bold')
    // console.log(typeof(selectedText))
})   

