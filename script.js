let toDoList = [];

const addNode = document.createElement("div");
// * todo input
const inputAddNode = document.createElement("input");
const addBtnNode = document.createElement("button");
const containerNode = document.createElement("div");

addBtnNode.textContent = "add";
addNode.appendChild(inputAddNode);
addNode.appendChild(addBtnNode);
document.body.appendChild(addNode);

// * functions
function addToDo(todoText) {
  const newToDo = {
    text: todoText,
    status: false,
    toDoId: `${Math.random() * 10}`,
  };
  toDoList.push(newToDo);
}

function deleteToDo(id) {
  toDoList.forEach((todo) => {
    if (todo.toDoId === id) {
      todo.status = true;
    }
  });
}

function render() {
  let html = "";
  toDoList.forEach((item) => {
    if (!item.status) {
      if (item.text === "") {
        item.text = "nothing";
      }
      html += `
        <div class="todo-block">
          ${item.text}
          <button data-ID="${item.toDoId}">видалити</button>
        </div>
        
      `;
      document.body.appendChild(containerNode);
    } else {
      return;
    }
  });
  containerNode.innerHTML = html;
}

// * event listeners
addBtnNode.addEventListener("click", (e) => {
  addToDo(`${inputAddNode.value}`);
  render();
  inputAddNode.value = "";
});

containerNode.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    return;
  } else {
    const dataID = e.target.dataset.id;
    deleteToDo(dataID);
  }
  render();
});

render();
