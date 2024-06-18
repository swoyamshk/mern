document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.getElementById("todo-list");
  const addTodoBtn = document.getElementById("add-todo-btn");

  addTodoBtn.addEventListener("click", addTodo);

  function addTodo() {
    const todoTitle = prompt("Enter the todo item:");
    const todoTime = prompt("Enter the time:");

    if (todoTitle && todoTime) {
      const li = document.createElement("li");
      li.classList.add("todo-item");
      li.innerHTML = `
                <input type="checkbox" class="favoriteBtn">
                <div class="todo-text">                Complete ${todoTitle} by ${todoTime}
</div>
                <div class='btn-div'>
                    <button class="removeBtn">X</button>
                </div>
            `;

      li.querySelector(".favoriteBtn").addEventListener("change", (event) => {
        if (event.target.checked) {
          li.classList.add("favorite");
        } else {
          li.classList.remove("favorite");
        }
      });

      li.querySelector(".removeBtn").addEventListener("click", () => {
        li.classList.toggle("cut");
      });

      todoList.appendChild(li);
    }
  }
});
