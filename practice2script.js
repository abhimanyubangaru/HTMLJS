console.log("recognized file");
function check(){
  console.log("check");

  var correctAnswers = [{question : '1', answer: "Abhi"},{question : '2', answer: "Cate School"}, {question : '3', answer: "Arcadia"}]
  var correct = 0;
  var result = document.getElementById("result");
  var quiz = document.getElementById("quiz");
  var end = correctAnswers.length();
  console.log(end);
  for(var i = 0; i < 3; i++){
    var question = "question" + i;
    var q = document.quiz.question.value;
    console.log(q);
    if(q == correctAnswers[i]){
      correct++;
    }
  }
  result.textContent = "You got " + correct + " right!";
  quiz.style.display = "none";
  console.log("working");
  console.log("this is my branch");
}
