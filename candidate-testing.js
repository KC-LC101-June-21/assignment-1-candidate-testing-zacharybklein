const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 

let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = [];
let candidateAnswer = [];
let questions = ['1) Who was the first American woman in space? ', '2) True or false: 5000 meters = 5 kilometers. ', '3) (5 + 3)/2 * 10 = ? ', '4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', '5) What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateName = (input.question("Candidate Name: "));

}





  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion() {

for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
    if (candidateAnswers[i] === correctAnswers[i] || candidateAnswers[i].toString().toLowerCase() === correctAnswers[i].toString().toLowerCase()) {
    correctAnswer = Number(correctAnswer + 1)
    }    
    else {
    correctAnswer = Number(correctAnswer + 0)
    } 
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]} \n`);
}
}



  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

function gradeQuiz(candidateAnswers) {
  let grade = (correctAnswer / 5) * 100;
  console.log(`>>> Overall Grade: ${grade}% (${correctAnswer} of 5 responses correct) <<<`)
  if (grade >= 80) {
  console.log(`>>> Status: PASSED <<<`);
  }
  else {
  console.log(`>>> Status: FAILED <<<`);
  return grade;
  }
}
gradeQuiz


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
 // console.log("Welcome " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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