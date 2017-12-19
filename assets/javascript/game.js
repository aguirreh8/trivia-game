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
	rightAnswer: '44'
}]

function addQuestions() {
	for (let i = 0; i < questions.length; i++) {
		const questionText = $('<p>');
		const form = $('<form>');
		const input = $('<input>');
		let j = i + 1;
		questionText.text(questions[i].question);
		// $('#questions').append(questionText);
		$('#questions').append(questionText);
		for (x = 0; x < 4; x++) {
			// input.attr({
			// 	type:'radio',
			// 	name:'question' + j,
			// 	value: questions[i].choices[x]
			// })
			$('#questions').append('<input type="radio" name="question' + j + '" value="' + questions[i].choices[x] + '" />', questions[i].choices[x]);
		}
	}
}

$(document).ready(function() {
	$('#startScreen').click(function() {
		$('#startScreen').addClass('is-hidden');
		$('#questions').removeClass('is-hidden');
		addQuestions();
	})
})