const input = document.getElementById("input");
const inProgressList = document.getElementById("in-progress-list");
const completedList = document.getElementById("completed-list");
let counter = 0;

const addTask = () => {
  if (input.value == "") {
    alert("Please write a note!");
  } else {
    const taskItem = document.createElement("li");
    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    taskItem.id = counter;
    taskItem.className = "task-item";
    taskItem.innerHTML = this.input.value;

    completeBtn.className = "completed";
    completeBtn.innerHTML = "✓";
    completeBtn.onclick = function () {
      moveToComplete(taskItem.id);
    };

    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "x";
    deleteBtn.onclick = function () {
      removeTask(taskItem.id);
    };

    taskItem.append(completeBtn, deleteBtn);
    inProgressList.append(taskItem);

    counter++;
    input.value = "";
  }
};

const moveToComplete = (id) => {
  const taskItem = document.getElementById(`${id}`);
  completedList.append(taskItem);
};

const removeTask = (id) => {
  const taskItem = document.getElementById(`${id}`);
  taskItem.remove();
};
