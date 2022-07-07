const tab = [
  {
    test: "odilon",
    done: false,
    edit: true,
  },
  {
    test: "sohan",
    done: true,
    edit: false,
  },
];
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form>input");

//afficher les todos
const displayTodo = () => {
  const tabTodo = tab.map((element, index) => {
    if (element.edit) {
      return createEditTodo(element, index);
    } else {
      return create(element, index);
    }
  });
  ul.innerHTML = "";
  ul.append(...tabTodo);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  addTodoList(tab, value);
  displayTodo();
  input.value = "";
});
//function pour creer un element li
function create(element, index) {
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");
  const buttonEditer = document.createElement("button");
  //ajout des class sur le buttonDelete
  buttonDelete.classList.add("btn", "btn-primary");
  buttonEditer.classList.add("btn", "btn-primary");
  //ajout des class sur le buttonEditer
  buttonDelete.type = "button";
  buttonDelete.innerText = "Suprimer";
  buttonEditer.innerText = "Editer";
  li.innerHTML = `<span class="todo ${element.done ? "done" : ""}"></span>
      <p>${element.test}</p>`;
  //ajout du buttonDelete et du buttonEditer dans l'element li
  li.append(buttonEditer, buttonDelete);

  li.addEventListener("click", (event) => {
    if (event.target.classList.contains("todo")) {
      toggleTodo(index);
    }
  });
  //suppression d'element li
  buttonDelete.addEventListener("click", (e) => {
    e.stopPropagation();
    deleteTodo(index);
  });
  buttonEditer.addEventListener("click", (e) => {
    e.stopPropagation();
    editer(index);
  });

  return li;
}
const createEditTodo = (element, index) => {
  const li = document.createElement("li");
  const buttonCancel = document.createElement("button");
  const input = document.createElement("input");
  const buttonSave = document.createElement("button");

  buttonCancel.classList.add("btn", "btn-primary");
  buttonSave.classList.add("btn", "btn-primary");
  buttonCancel.innerText = "Cancel";
  buttonSave.innerText = "Save";
  input.type = "text";
  input.value = element.test;
  li.append(input, buttonCancel, buttonSave);

  buttonSave.addEventListener("click", (e) => {
    e.stopPropagation();
    save(index, input);
  });
  buttonCancel.addEventListener("click", (e) => {
    e.stopPropagation();
    cancel(index);
  });

  return li;
};
displayTodo();
//ajouter des todo
function addTodoList(tab, test) {
  if (test) {
    tab.push({
      test,
      done: false,
      edit: false,
    });
  }
}
function cancel(index) {
  tab[index].edit = false;
  displayTodo();
}

//supprimer le todo
function deleteTodo(index) {
  console.log("enfant");
  tab.splice(index, 1);
  displayTodo();
}
function save(index, input) {
  console.log(input.value);
  tab[index].test = input.value;
  editer(index);
}
function toggleTodo(index) {
  tab[index].done = !tab[index].done;
  console.log(tab[index]);
  displayTodo();
}
const editer = (index) => {
  tab[index].edit = !tab[index].edit;
  console.log(tab);

  displayTodo();
};
