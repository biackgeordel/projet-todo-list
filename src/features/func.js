//function pour creer un element li
export function create(element) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="todo ${element.done ? "done" : ""}"></span>
      <p>${element.test}</p>
      <button class="btn btn-primary">Supprimer</button>`;
  return li;
}
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
