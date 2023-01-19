// ### ****[Тег в комментарии](https://learn.javascript.ru/basic-dom-node-properties#teg-v-kommentarii)****

// Что выведет этот код?

let body = document.body;

body.innerHTML = '<!--' + body.tagName + '-->';

alert(body.firstChild.data); // что выведет?

// код внедрит первым элементом комментарий со словом "BODY" внутрь тега <body>, а alert выведет название тега "BODY"
