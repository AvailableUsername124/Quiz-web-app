$(document).ready(function() {
	$("#check1").click(function() {
		const userAnswer = $("#answerBox1").val().trim().toLowerCase();
		const correctAnswer = "1776";
		if (userAnswer === correctAnswer) {
			$("#resultMessage1").text("Correct!").css("color", "green");
		} else {
			$("#resultMessage1").text("Incorrect, try again.").css("color", "red");
		}
	});
	$("#answ2").hide();
	$("#check2").click(function() {
		$("#answ2").show();
	});
	$("#answ3").hide();
	$("#check3").click(function() {
		$("#answ3").show();
	});
	$("#answ4").hide();
	$("#check4").click(function() {
		$("#answ4").show();
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


