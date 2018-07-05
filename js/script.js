'use strict';
const width_pole = 500;
const heght_pole = 300;
$("#pole").css("width", width_pole)
$("#pole").css("height", heght_pole)
$("#pole").css("margin", "200px 0px 0px 30%")
$("#pole").css("border", "2px solid black")
$("#ball").css("left", "230px")
$("#ball").css("top", "130px")
$("#right_player").css("right", "0px")
$("#right_player").css("top", "130px")
$("#left_player").css("left", "0px")
$("#left_player").css("top", "130px")
let playerX = parseInt($("#right_player")[0].style.top)
let playerX_left = parseInt($("#left_player")[0].style.top)
document.onkeydown = function pressF(e) {
	if (e.keyCode == 40) {
		playerX += 25
		$("#right_player").css("top", playerX)
		if (playerX >= heght_pole - 70) {
			playerX = heght_pole - 70
			$("#right_player").css("top", playerX)
		}
	}
	if (e.keyCode == 38) {
		playerX -= 25
		$("#right_player").css("top", playerX)
		if (playerX < 0) {
			playerX = 0
			$("#right_player").css("top", playerX)
		}
	}
	if (e.keyCode == 16) {
		playerX_left -= 25
		$("#left_player").css("top", playerX_left)
		if (playerX_left < 0) {
			playerX_left = 0
			$("#left_player").css("top", playerX_left)
		}
	}
	if (e.keyCode == 17) {
		playerX_left += 25
		$("#left_player").css("top", playerX_left)
		if (playerX_left >= heght_pole - 70) {
			playerX_left = heght_pole - 70
			$("#left_player").css("top", playerX_left)
		}
	}
}
let x = parseInt($("#ball")[0].style.left);
let y = parseInt($("#ball")[0].style.top);
let scoreleft = 0
let scoreright = 0
let speed = 2
$("#startButton").click(function() {
	Clean()
	speed = 2
	$("#ball").css("left", "230px")
	$("#ball").css("top", "130px")
	$("#right_player").css("right", "0px")
	$("#right_player").css("top", "130px")
	$("#left_player").css("left", "0px")
	$("#left_player").css("top", "130px")
	x = parseInt($("#ball")[0].style.left);
	y = parseInt($("#ball")[0].style.top);
	playerX = parseInt($("#right_player")[0].style.top)
	playerX_left = parseInt($("#left_player")[0].style.top)
	getRandomX(1, 3)
	getRandomY(1, 3)
})

function getRandomX(min, max) {
	if (Math.floor(Math.random() * (max - min)) + min == 1) {
		goRight()
	} else {
		goLeft()
	}
}

function getRandomY(min, max) {
	if (Math.floor(Math.random() * (max - min)) + min == 1) {
		gobottom()
	} else {
		gotop()
	}
}

function goRight() {
	let interval1 = setInterval(function() {
		x += speed
		$("#ball").css("left", x)
		if (y >= playerX && y <= playerX + 70 && x > width_pole - 30) {
			clearInterval(interval1);
			speed += 0.3
			goLeft()
		} else if (x > width_pole - 20) {
			Clean()
			scoreleft++
			$("#leftScore").text(scoreleft)
		}
	}, 10)
}

function goLeft() {
	let interval2 = setInterval(function() {
		x -= speed
		$("#ball").css("left", x)
		if (y >= playerX_left && y <= playerX_left + 70 && x < 10) {
			clearInterval(interval2);
			speed += 0.3
			goRight()
		}
		if (x < 0) {
			Clean()
			scoreright++
			$("#rightScore").text(scoreright)
		}
	}, 10)
}

function gobottom() {
	var intervalY2 = setInterval(function() {
		y += speed
		$("#ball").css("top", y)
		if (y > heght_pole - 20) {
			clearInterval(intervalY2)
			gotop()
		} else if (y >= playerX && y <= playerX + 70 && x > width_pole - 30) {
			clearInterval(intervalY2)
			gotop()
		}
	}, 10)
}

function gotop() {
	var intervalY1 = setInterval(function() {
		y -= speed
		$("#ball").css("top", y)
		if (y < 0) {
			clearInterval(intervalY1)
			gobottom()
		} else if (y >= playerX && y <= playerX + 70 && x > width_pole - 30) {
			clearInterval(intervalY1)
			gobottom()
		}
	}, 20)
}

function Clean() {
	for (var i = 1; i < 1000; i++) {
		clearTimeout(i);
	}
}