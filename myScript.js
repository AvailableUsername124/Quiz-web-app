$(document).ready(function() {
	$("#check1").click(function() {
		const userAnswer = $("#answerBox1").val().trim().toLowerCase();
		const correctAnswer = "1776";
		if (userAnswer === correctAnswer) {
			$("#resultMessage1").text("Correct!").css("color", "green");
		} else {
			$("#resultMessage1").text("Incorrect, the answer is 1776.").css("color", "red");
		}
	});
	
	$("#check2").click(function() {
		const userAnswer = $("#answerbox2").val().trim().toLowerCase();
		const correctAnswers = ["united kingdom", "uk", "britain", "england", "the united kingdom of great britain and northern ireland"];
		if (correctAnswers.includes(userAnswer)) {
			$("#resultMessage2").text("Correct!").css("color", "green");
		} else {
			$("#resultMessage2").text("Incorrect, the answer is the United Kingdom.").css("color", "red");
		}
	});
	
	$("#check3").click(function() {
		const userAnswer = $("#answerbox3").val().trim().toLowerCase();
		const correctAnswer = "jamestown";
		if (userAnswer === correctAnswer) {
			$("#resultMessage3").text("Correct!").css("color", "green");
		} else {
			$("#resultMessage3").text("Incorrect, the answer is Jamestown (dont put spaces).").css("color", "red");
		}
	});
	
	$("#check4").click(function() {
		const userAnswer = $("#answerbox4").val().trim().toLowerCase();
		const correctAnswer = "1775-1783";
		if (userAnswer === correctAnswer) {
			$("#resultMessage4").text("Correct!").css("color", "green");
		} else {
			$("#resultMessage4").text("Incorrect, the answer is 1775-1783.").css("color", "red");
		}
	});
	
$("#answerBox1").on("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    $("#check1").click();
  }
});
var input = document.getElementById("answerbox2");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check2").click();
  }
  
});
var input = document.getElementById("answerbox3");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check3").click();
  }
  
});
var input = document.getElementById("answerbox4");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check4").click();
  }
  
});

});


