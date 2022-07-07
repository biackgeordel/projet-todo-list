//function pour creer un element li
export function create(element, index) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.type = "button";
  button.innerText = "Suprimer";
  li.innerHTML = `<span class="todo ${element.done ? "done" : ""}"></span>
      <p>${element.test}</p>`;
  li.append(button);
  li.addEventListener("click", (event) => {
    console.log(index);
  });
  button.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  return li;
}
//ajouter des todo
export function addTodoList(tab, test) {
  tab.push({
    test,
    done: false,
  });
}
//supprimer le todo
function deleteTodo(index) {}
/*
//function pour activer et desactiver le bouton supprimer
export const disabledveButton = () => {
  const span = document.querySelectorAll(`ul>li>span`);
  for (let element of span) {
    if (!element.classList.contains("done")) {
      element.closest("li").lastElementChild.classList.add("disabled");
    } else {
      element.closest("li").lastElementChild.classList.remove("disabled");
    }
  }
};
//function pour activer et désactiver le span
export const activeTodo = (e) => {
  console.log(e.target);
  const element = e.target;
  if (element.classList.contains("todo")) {
    element.classList.toggle("done");
  }
  disabledveButton();
};
//function pour recuperer les todos dans la tableau de todo
export const displayTodoList = (tab, ul) => {
  //tableau  contenant les elements li
  const dispatchElement = tab.map((element) => {
    return create(element);
  });

  console.log(...dispatchElement);
  ul.innerHTML = "";
  ul.append(...dispatchElement);
};

export function deleteTodoList(e, tab) {
  const element = e.target;
  console.log(tab);

  if (element.classList.contains("btn")) {
    const tabElement = tab.map((element) => create(element));
    console.log(tabElement);
    const parent = element.closest("li");
    console.log(parent);
    const index = tabElement.findIndex(
      (element) => element.innerHTML === parent
    );
    console.log(index);
    tab.splice(index, 1);
    parent.remove();
  }
}*/
