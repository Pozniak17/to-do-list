console.log("Module 6.1");

const itemTemplate = ({ id, isDone, text }) =>
  `<li data-id="${id}">
        <label>
          <input type="checkbox" ${isDone ? "checked" : ""} />
          <span>${text}</span>
        </label>
      </li>`;

//! Вихідні дані
const items = [
  { id: 1, text: "Масло", isDone: false },
  { id: 2, text: "Сир", isDone: true },
  { id: 3, text: "Ковбаса", isDone: false },
  { id: 4, text: "Часник", isDone: true },
  { id: 5, text: "Молоко", isDone: false },
];

const refs = {
  body: document.querySelector("body"),
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

const createList = () => {
  const ul = document.createElement("ul");

  const list = items
    .map(itemTemplate) //! в функцію передаємо функцію з 3 рядка

    //! Фіксимо коми(масив ставить все через коми), задаємо join без нічого.
    .join("");
  ul.insertAdjacentHTML("beforeend", list);
  refs.body.append(ul);
};

createForm();
createList();

/*
 * 6 рядом, у інпута є атрибут checked значить він true,
 * якщо цього атрибута немає значить false.
 ! ${isDone ? "checked" : ""} якщо так то "checked", якщо ні, то ""
 * */
