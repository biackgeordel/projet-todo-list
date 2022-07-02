import { tab, ul } from "./element.js";
import { create, disabledveButton, activeTodo } from "./func.js";
console.log(tab);
console.log(ul);

//tableau  contenant les elements li
const dispatchElement = tab.map((element) => {
  return create(element);
});

console.log(...dispatchElement);
ul.append(...dispatchElement);
disabledveButton();
//event pour activer et désactiver le span todo
ul.addEventListener("click", activeTodo);
