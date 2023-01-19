// ### ****[Поиск элементов](https://learn.javascript.ru/searching-elements-dom#poisk-elementov)****

// Вот документ с таблицей и формой.

// Как найти?…

// 1. Таблицу с `id="age-table"`.

const ageTable = document.querySelector('#age-table');
console.log(ageTable);

// 2. Все элементы `label` внутри этой таблицы (их три).

const allLabels = document.querySelectorAll('#age-table label');
console.log(allLabels);

// 3. Первый `td` в этой таблице (со словом «Age»).

const firstTd = document.querySelector('#age-table td');
console.log(firstTd, firstTd.textContent);

// 4. Форму `form` с именем `name="search"`.

const searchForm = document.querySelector('form');
console.log(searchForm, searchForm.name);

// 5. Первый `input` в этой форме.

const firstInput = document.querySelector('input');
console.log(firstInput, firstInput.name);

// 6. Последний `input` в этой форме.

const lastInput = document.querySelectorAll('input');
console.log(lastInput[lastInput.length - 1], lastInput[lastInput.length - 1].value);
