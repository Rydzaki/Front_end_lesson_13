// const btnNote = document.querySelector("#btn");

// let number = 0;
// btnNote.innerText = number;

// btnNote.addEventListener("mouseover", ({target}) => { // click название события
// // console.log(event);
//     number++;
// target.innerText = number; // btnNote.innerText = number
// });

// //console.log("Клик"));

const formNode = document.querySelector("#addForm");
console.log(formNode);

const tasks = []; // создаем пустой массив

// formNode.addEventListener("submit", (event) => {
  
//   event.preventDefault(); // отменяет поведение по умолчанию (отправка HTTP запроса) пишем всегда
//   console.log(event.target);// можно вписывать значения event.target.title.value и сотреть что выводися. Target это свойство. event.target обеспечивает доступ к элементу, на котором произошло событие.
//   //console.log("submited!");
//   const title = event.target.title.value //получение значения из HTML
//   console.log(title);

//   tasks.push(title); // в созданный массив записываем в него значания которые будем вводить в форму
//   console.log(tasks);

//   //event.target.title.value = "" // очищаем форму после ввода
//   event.target.reset();
// });


const tasks1 = []; // создаем пустой массив

formNode.addEventListener("submit", (event) => {
  
    event.preventDefault();
    const title = event.target.title.value 
    const employee = event.target.employee.value
    const price = +event.target.price.value
    // const task = {title, employee, price
    //     // title: title,
    //     // employee: employee,
    //     // price: +price // модифицировали в число
    // };
    //tasks1.push(task);
    tasks1.push({title, employee, price});

    console.log(tasks1);
    event.target.reset();
  });
  
