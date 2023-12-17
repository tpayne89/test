let currentQuestion = 0;

function showQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.innerHTML = questions[currentQuestion].question;
}

function checkAnswer() {
  const answerElement = document.getElementById("answer");
  const userAnswer = answerElement.value.trim();
  const correctAnswer = questions[currentQuestion].answer.toLowerCase().trim();

  if (userAnswer === correctAnswer) {
    alert("Correct answer!");
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
      answerElement.value = "";
    } else {
      alert("Quiz completed!");
      answerElement.disabled = true;
    }
  } else {
    alert("Wrong answer. Try again.");
  }
}

// Retrieve questions from the Firebase Realtime Database
db.ref("questions").on("value", function (snapshot) {
  const data = snapshot.val();
  if (data) {
    questions = Object.values(data); // Convert object to array
    showQuestion();
  }
});
