const answers = ["q1a", "q2c", "q3b", "q4a", "q5c", "q6b", "q7b", "q8c"];
const form = document.querySelector("#pi-test-form");
const clearBtn = document.querySelector("#clear-btn");
const result = document.querySelector("#correct-count");
let selectedAnswers = [];
let correctSelAnswers = [];

clearBtn.addEventListener("click", clear);

// Somehow this function triggers the submit event
function clear () {
    selectedAnswers = [];
    correctSelAnswers = [];
    form.reset();
    result.innerText = "";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelectorAll("input[type=radio]:checked").forEach((currentVal) => selectedAnswers.push(currentVal.value));
    for (var i = 0; i < answers.length; i++) {
        if (answers[i] === selectedAnswers[i]) {
            correctSelAnswers.push(selectedAnswers[i]); 
        } 
        // This gets triggered on submit
        document.querySelector(`label[for=${answers[i]}]`).style.backgroundColor === "" ? 
        document.querySelector(`label[for=${answers[i]}]`).style.backgroundColor = "yellowgreen" : 
        document.querySelector(`label[for=${answers[i]}]`).style.backgroundColor = "";
    }
    result.innerHTML = `Sie haben ${correctSelAnswers.length} von ${answers.length} Fragen korrekt beantwortet`;
    selectedAnswers = [];
    correctSelAnswers = [];
});

