console.log("security_questions.js loaded");


let securityQuestions = [
  {
    question: "What is the name of your first pet?",
    expectedAnswer: "FlufferNutter"
  },

  {
    question: "What is the name of your favorite city?",
    expectedAnswer: "San Francisco"
  },

  {
    question: "What street did you grow up on?",
    expectedAnswer: "Blossom Way"
  }
];


var userAnswer = "";


//for ( var i=0; i < securityQuestions.length; i++;) {
for (var i=0; i < securityQuestions.length; i++){
  userAnswer = prompt (securityQuestions[i].question);
  if (userAnswer !== securityQuestions[i].expectedAnswer) {
    alert("Incorrect security questions response!");
    break;
  }
};
