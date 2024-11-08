function toggleAnswer(question) {
    var answer = question.nextElementSibling;
    
    // Close any currently open answers
    var allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(function (ans) {
        if (ans !== answer) {
            ans.classList.remove('open'); // Close the other answers
        }
    });
    
    // Toggle the clicked answer
    if (answer.classList.contains('open')) {
        answer.classList.remove('open'); // Close the answer if it's already open
    } else {
        answer.classList.add('open'); // Open the answer
    }
}
