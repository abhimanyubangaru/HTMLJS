console.log("recognized file");
function check(){
  console.log("check");

  var correct = 0;
  var q1 = document.quiz.question1.value;
  var result = document.getElementById("result");
  var quiz = document.getElementById("quiz");
  if(q1 == "Abhi"){
    correct++;
  }
  result.textContent = "You got " + correct + " right!";
  quiz.style.display = "none";
  console.log("working");
}
