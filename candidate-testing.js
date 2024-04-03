const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// candidateName = input.question("Hello, candidate! What is your name? ");


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = ("");

// if (candidateAnswer == correctAnswer){
//   console.log("")
// }


//console.log(`${candidateName} \n ${question} \n + ${correctAnswer} \n + ${candidateAnswer}`);//
//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Hello, candidate! What is your name? ")
  console.log(`\nCandidate Name: ${candidateName}\n`);

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      console.log(`That's correct! You answered ${candidateAnswers[i]} and the correct answer is ${correctAnswers[i]}!`);
    } else {
      console.log(`${candidateAnswers[i]} is incorrect. The correct answer is ${correctAnswers[i]}.`);

    }

  }


}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // for (let i = 0; i < correctAnswers.length; i++){
  //   if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()){
  //     console.log(`That's correct! You answered ${candidateAnswers[i]} and the correct answer is ${correctAnswers[i]}!`);
  //   } else {
  //     console.log(`${candidateAnswers[i]} is incorrect. The correct answer is ${correctAnswers[i]}.`);
  //   }

  // }

  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      (grade += 20);
    }
  }
  console.log(`Final Grade: ${grade}%`);
  if (grade >= 80){
    console.log("You passed!")
    } else {
      console.log("We regret to inform you that you did not pass.")
    }
  return grade;
    
  }


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Greetings, ${candidateName}!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};