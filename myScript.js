$(document).ready(function() {
	$("#answ1").hide();
	$("#check1").click(function() {
		$("#answ1").show();
		if($username.parent('label').hasId('answ1')) {
			$('#answ1').text('Correct!');
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

var input = document.getElementById("answer box1");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check1").click();
  }
});
var input = document.getElementById("answer box2");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check2").click();
  }
});
var input = document.getElementById("answer box3");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check3").click();
  }
});
var input = document.getElementById("answer box4");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check4").click();
  }
});

});

	
