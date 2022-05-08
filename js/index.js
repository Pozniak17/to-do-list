console.log("Module 6.1");

const itemTemplate = ({ id, isDone, text }) =>
  `<li data-id="${id}">
        <label>
          <input type="checkbox" ${isDone ? "checked" : ""} />
          <span>${text}</span>
        </label>
        <button>x</button>
      </li>`;

//! Вихідні дані
let items = [
  { id: "1", text: "Масло", isDone: false },
  { id: "2", text: "Сир", isDone: true },
  { id: "3", text: "Ковбаса", isDone: false },
  { id: "4", text: "Часник", isDone: true },
  { id: "5", text: "Молоко", isDone: false },
];

const refs = {
  ul: document.querySelector("ul"),
  form: document.querySelector("form"),
};

const createForm = () => {
  const form = document.createElement("form");
  const label = document.createElement("label");
  const span = document.createElement("span");
  const input = document.createElement("input");
  const button = document.createElement("button");

  span.textContent = "Enter text";

  input.type = "text"; //input.setAttribute("type", "text")
  input.name = "text"; //input.setAttribute("name", "text");

  button.textContent = "+ Add";
  button.type = "submit";

  label.append(span, input, button);
  form.append(label, button);
  //   console.log(form);

  refs.body.append(form);
};

const handleSubmit = (event) => {
  event.preventDefault();

  //! створюємо додавання елемента
  const text = event.target.elements.text.value;
  const newItem = {
    id: Date.now().toString(),
    text,
    isDone: false,
  };

  items.push(newItem);
  renderList();
  //* reset скидує до стартового стану програми
  refs.form.reset();
};

const toggleItem = (id) => {
  items = items.map((item) =>
    item.id === id
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item
  );
};

const deleteItem = (id) => {
  items = items.filter((item) => item.id !== id);
};

const handleListClick = (event) => {
  if (event.target === event.currentTarget) return;

  const parent = event.target.closest("li");
  const { id } = parent.dataset;

  switch (event.target.nodeName) {
    case "INPUT":
      toggleItem(id);
      break;
    case "BUTTON":
      deleteItem(id);
      break;

    default:
      break;
  }
  renderList();
};

const renderList = () => {
  const list = items
    .map(itemTemplate) //! в функцію передаємо функцію з 3 рядка
    //! Фіксимо коми(масив ставить все через коми), задаємо join без нічого.
    .join("");

  //! робимо очистку списку(бо він буде повторюватися)
  refs.ul.innerHTML = "";
  refs.ul.insertAdjacentHTML("beforeend", list);
};

refs.form.addEventListener("submit", handleSubmit);
refs.ul.addEventListener("click", handleListClick);

renderList();

/*
 * 6 рядом, у інпута є атрибут checked значить він true,
 * якщо цього атрибута немає значить false.
 ! ${isDone ? "checked" : ""} якщо так то "checked", якщо ні, то ""
 * */

//  1.35.00
