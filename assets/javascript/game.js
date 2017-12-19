const questions = [{
	question: 'How old am I?',
	choices: ['2',
	 '44',
	 '53',
	 '29'],
	rightAnswer: '29'
}, {
	question: "How old are you?",
	choices: ['88',
	'10',
	'21',
	"34"],
	rightAnswer: '34'
}]

function addQuestions() {
	for (let i = 0; i < questions.length; i++) {
		const questionText = $('<p>');
		let j = i + 1;
		questionText.text(questions[i].question);
		$('#questions').append(questionText);
		for (x = 0; x < 4; x++) {
			$('#questions').append('<input type="radio" name="question' + j + '" value="' + questions[i].choices[x] + '" />', questions[i].choices[x]);
		}
	}
}

function checkAnswers(answer1, answer2) {
	const answerArray = [answer1, answer2];
	let right = 0;
	let wrong = 0;
	let unanswered = 0;
	for (let i = 0; i < answerArray.length; i++) {
		if (answerArray[i] == questions[i].rightAnswer) {
			right++;
		} else if (answerArray[i] == undefined) {
			unanswered++;
		} else {
			wrong++;
		}
	}
	console.log("Right: " + right);
	console.log("Wrong: " + wrong);
	console.log("Unanswered: " + unanswered);
	console.log("--------------")
}

$(document).ready(function() {
	$('#startScreen').click(function() {
		$('#startScreen').addClass('is-hidden');
		$('#questionScreen').removeClass('is-hidden');
		addQuestions();
	})

	$('#submitButton').click(function() {
		let radioValue1 = $("input[name='question1']:checked").val();
		let radioValue2 = $("input[name='question2']:checked").val();
		checkAnswers(radioValue1, radioValue2);
	})
})