let inputBox = document.querySelector(".input");
let AddBtn = document.querySelector("#addBtn");
let outputArea = document.querySelector(".output");

AddBtn.addEventListener("click", addBtnFunction);
// Add button functionality 
function addBtnFunction()
{
  if (inputBox.children[0].value == "") {
    let popup = document.querySelector(".empty-popup");
    popup.style.display = "flex";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);

    return;
  }

  // add the to-dos in the list
  let inputValue = inputBox.children[0].value;
  let outputHtml = `
<p id="outputText">${inputValue}</p>
<p onclick ="editElm(this)" class="clicks"><i class="ri-edit-box-line"></i></p>
<p id="removeBtn" onclick="removeElm(this)" class="clicks"><i class="ri-delete-bin-line"></i></p>
`;
  let outputBox = document.createElement("div");
  outputBox.classList.add("output-box");
  outputBox.innerHTML = outputHtml;

  outputArea.appendChild(outputBox);

  inputBox.children[0].value = "";

  let emptyBoxMsg = document.querySelector(".empty-msg");
  emptyBoxMsg.style.display = "none";
}

// remove button functionality
function removeElm(e) {
  e.parentElement.remove();
  if (outputArea.children.length == 1) {
    let emptyBoxMsg = document.querySelector(".empty-msg");
    emptyBoxMsg.style.display = "flex";
  }
}

// edit functionality
let popup;
let mainE;

function editElm(e) {
  mainE = e;
  let elmText = e.previousElementSibling.textContent;
  popup = document.querySelector(".edit-popup");
  popup.style.display = "flex";
  let editInput = document.querySelector("#editInput");
  editInput.value = elmText;
}

// PopUps 
function removePopup() {
  popup.style.display = "none";
}

// edit done popup
function makeChanges() {
  let elmText2 = mainE.previousElementSibling;
  let editInputText = document.querySelector("#editInput").value;
  elmText2.textContent = editInputText;

  let popup = document.querySelector(".changes-done-popup");
  popup.style.display = "flex";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
  removePopup();
}

// Add list by Pressing Enter Key 
let OnInputBox = document.querySelector("#inputBox");
OnInputBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addBtnFunction();
  }
});