/* Написати та викликати власну функцію «Діалог з користувачем», застосувати змінні, умовне розгалуження, цикли. 
Функцію помістити в зовнішній файл-скрипт. Підключити до html-документу.  
Написати та викликати власну функцію виводу інформації про розробника сторінки з параметрами (прізвище, ім’я, посада). 
Параметру «посада» задати значення за замовчуванням.
Написати функцію порівняння двох рядків, більший вивести на екран, використовуючи alert.
За допомогою об’єкта document змінити фон сторінки на 30 секунд. */

document.addEventListener("DOMContentLoaded", function() {
    dialog();
    developerInfo(lastName, firstName);
    compareStrings();
    changeBackground();

    findElements();
    DOMfunctions();
    modifyDocument();
});

function dialog() {
    alert("Привіт, користувач! Ми трохи поспілкуємося!");

    let firstVisit = confirm("Ти вперше на сайті?");

    if (firstVisit != false) {
    let person = prompt("Як тебе звати?", "Гарі Поттер");
    alert("Приємно познайомитися, " + person + "!");
    };
}

let lastName = "Іваненко";
let firstName = "Іван";

function developerInfo(lastName, firstName, position = "Розробник") {
    alert("Прізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position);
}

function compareStrings() { 
    let string1 = prompt("Введіть перший рядок:");
    let string2 = prompt("Введіть другий рядок:");   

    if (string1.length > string2.length) { 
        alert("Більший рядок: " + string1);
    }
    else if (string1.length < string2.length) {
        alert("Більший рядок: " + string2);
    }
}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
    setTimeout(function() {
        document.body.style.backgroundColor = "";
    }, 30000);
}

/*
2) За допомогою об’єкта location перенаправити браузер на іншу сторінку.

Використати методи поуку елементів getElementById, querySelectorAll.

Використати наступні властивості DOM-вузла: innerHTML, outerHTML, nodeValue / data, textContent.

Внести зміни в документи/сторінку, використовуючи document.write, document.createElement(tag), document.createTextNode(text) 
та методи вставки node.append (... nodes or strings), node.prepend (... nodes or strings), 
node.after (... nodes or strings), node.replaceWith (... nodes or strings), метод видалення вузлів node.remove (). */

function redirect() { 
    location.assign("http://127.0.0.1:5500/catalog.html");
}

function findElements() {
    let elementById = document.getElementById("mainTitle");
    let elementsByQuery = document.querySelectorAll(".section-title");
    alert("Елемент з id 'mainTitle': " + elementById.innerHTML);
    alert("Елементи з класом 'section-title': " + elementsByQuery.length);
}

function DOMfunctions () {
    let mainTitle = document.getElementById("mainTitle");
    mainTitle.innerHTML = "Змінений заголовок";

    let outer = document.getElementsByTagName("h2")[0].outerHTML;
    alert("Outer HTML: " + outer);

    let valueNode = document.getElementsByTagName("a")[0].childNodes[0].nodeValue;
    alert("Node Value: " + valueNode);

    let textElement = document.getElementById("mainTitle");
    textElement.textContent = "Новий текст заголовка";
}

function modifyDocument() {
    // document.write
    document.write("<h2>Документ перезаписано через document.write</h2>");

    // createElement + createTextNode
    const para = document.createElement("p");
    let textNode = document.createTextNode("Це текстовий вузол.");
    para.append(textNode);

    document.body.append(para);

    // append
    const div = document.createElement("div");
    div.textContent = "Доданий через append";
    document.body.append(div);

    // prepend
    const header = document.createElement("h1");
    header.textContent = "Зверху (prepend)";
    document.body.prepend(header);

    // after
    const afterEl = document.createElement("p");
    afterEl.textContent = "Після заголовка";
    header.after(afterEl);

    // replaceWith
    const newEl = document.createElement("p");
    newEl.textContent = "Замінив попередній елемент";
    afterEl.replaceWith(newEl);

    // remove
    setTimeout(() => {
        newEl.remove();
    }, 5000);
}