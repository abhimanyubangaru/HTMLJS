var a = "Hello";
var b = "world";
console.log(a+ " " + b);
console.log(a,b);
console.log(typeof a, typeof b);


function check(){
  var correct = 0;
  var q1 = document.quiz.question1.value;
  var result = document.getElementById('result');
  var quiz = document.getElementById('quiz');
  if(q1 == "Abhi"){
    c++;
  }
  result.textContent = '${correct}';
  quiz.style.display = "none";
}
