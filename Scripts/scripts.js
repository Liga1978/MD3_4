
const innerCont = document.getElementById("id-inner-cont");
const maxCountEl = document.getElementById("max-count");
const minCountEl = document.getElementById("min-count");
maxCountEl.value = 100;
minCountEl.value = 1;
let maxCount = 100;

function deleteElements() {
    console.log("Clearing Elements");
    while (innerCont.firstChild) {
    innerCont.removeChild(innerCont.firstChild);
    maxCountEl.value = "100";
    minCountEl.value = "1";
    };
}

function addElement(parent, tag, id, classList, content) {
    const newEl = document.createElement(tag);
    if (id !== null) newEl.id = id;
    newEl.classList.add(...classList);
    newEl.innerText = content;
    parent.appendChild(newEl);
}

function addManyElements() {
    console.log("Adding Many Elements");
    for (let i = 1; i <= maxCount; i++) {
        const id = "b-id-" + i;
        const classList = ["box"];
        console.log(`Adding index ${i} id ${id} with `);
        if (i % 3 === 0 && i % 5 ===0) {
            classList.push("Fizzbuzz");
            addElement(innerCont, "div", id, classList, i+" FizzBuzz");
        } else if (i % 3 === 0) {
            classList.push("Fizz");
            addElement(innerCont, "div", id, classList, i+" Fizz");
        } else if (i % 5 === 0) {
            classList.push("Buzz");
            addElement(innerCont, "div", id, classList, i+" Buzz");
        } else {
            classList.push("num");
            addElement(innerCont, "div", id, classList, i);
        }
     }
}

function onInputChange () {
    console.log("New value might be", minCountEl.value, maxCountEl.value);
    const svalue = parseInt(minCountEl.value);
    const tvalue = parseInt(maxCountEl.value);
    minCount = svalue;
    maxCount = tvalue;
    let MIN = 1;
    let MAX = 100;
    if (tvalue > MAX || tvalue < MIN || svalue > MAX || svalue < MIN || svalue > tvalue) return;
    for (let i = svalue; i <= tvalue; i++) {
        const id = "b-id-" + i;
        const classList = ["box"];
        if (i % 3 === 0 && i % 5 ===0) {
            classList.push("Fizzbuzz");
            addElement(innerCont, "div", id, classList, i+" FizzBuzz");
        } else if (i % 3 === 0) {
            classList.push("Fizz");
            addElement(innerCont, "div", id, classList, i+" Fizz");
        } else if (i % 5 === 0) {
            classList.push("Buzz");
            addElement(innerCont, "div", id, classList, i+" Buzz");
        } else {
            classList.push("num");
            addElement(innerCont, "div", id, classList, i);
        }
   }
}

function fizzbuzz () {
    for (let i = 1; i <= maxCount; i++) {
        const id = "b-id-" + i;
        const classList = ["box"];
        if (i % 3 === 0 && i % 5 ===0) {
            classList.push("Fizzbuzz");
            addElement(innerCont, "div", id, classList, i+" FizzBuzz");
        };

        }

}

function addEventHandlers() {
    document.getElementById("btn-id-add-many").onclick = addManyElements;
    document.getElementById("btn-id-clear").onclick = deleteElements;
    document.getElementById("fizzbuzz").onclick = fizzbuzz;
    maxCountEl.onchange = onInputChange; 
    minCountEl.onchange = onInputChange;
  
}

addEventHandlers();