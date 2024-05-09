function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "correct";
        result.style.color = 'green';
    } else {
        result.textContent = "try agian";
        result.style.color = 'red';
    }
 }

 function checkAnswer2(answer) {
    const result = document.getElementById('results');
    if (answer === 'b') {
        result.textContent = "correct";
        result.style.color = 'green';
    } else {
        result.textContent = "try again";
        result.style.color = 'red';
    }
 }
 