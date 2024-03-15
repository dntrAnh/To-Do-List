function addTask() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    const task = inputBox.value.trim();
    if (!task) {
        alert("Please give me a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
    <label>
        <input type="checkbox">
        <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;

    listContainer.appendChild(li);
    inputBox.value = "";

    const checkbox = li.querySelector("input[type='checkbox']");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("label span");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });

    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false; // Uncheck the checkbox when editing
            updateCounters();
        }
    });

    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
            updateCounters();
        }
    });

    updateCounters(); // Update counters after adding a task
}

function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    const completedCounter = document.getElementById("completed-counter");
    const uncompletedCounter = document.getElementById("uncompleted-counter");

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}

// You might want to attach the `addTask` function to an event listener for the add button here, if you haven't already.
