//construct a list of questions and it's possible answers
const questions = [
	{
		question: 'What city is the capital of China?',
		choices: ['Shanghai',
		 'Suzhou',
		 'Beijing',
		 'Ordos'],
		rightAnswer: 'Beijing'
	}, 
	{
		question: "How long is an eon in geology?",
		choices: ['A thousand years',
		'A trillion years',
		'A million years',
		"A billion years"],
		rightAnswer: 'A billion years'
	},
	{
		question: "This musician is often referred to as the fifth Beatle.",
		choices: ["Yoko Ono",
		'Pete Best',
		'Ringo Starr',
		"Pete Townsend"
		],
		rightAnswer: "Pete Best"
	},
	{
		question: "Is 45 a prime number?",
		choices: ["Yes", "No"],
		rightAnswer: "No"
	},
	{
		question: "What is professional wrestler, John Cena, catch phrase?",
		choices: ["Come at me",
		"You can't see me!",
		"Try me!",
		"I'm the best"
		],
		rightAnswer: "You can't see me!"
	},
	{
		question: 'In the movie "The Wizard of Oz", what did the Scarecrow want from the wizard?',
		choices: ["Heart",
		"Brain",
		"Soul",
		"Legs"
		],
		rightAnswer: "Brain"
	}

]

let time = 60; //sets timer
let intrevalID; // create intervalID

//adds question to the DOM based on how many objects in the questions Array
function addQuestions() {
	for (let i = 0; i < questions.length; i++) {
		const questionText = $('<p>');
		let j = i + 1;
		questionText.text(questions[i].question);
		$('#questions').append(questionText);
		for (x = 0; x < questions[i].choices.length; x++) {
			$('#questions').append('<input type="radio" name="question' + j + '" value="' + questions[i].choices[x] + '" />', questions[i].choices[x]);
		}
	}
}

//for every second (1000 miliseconds), run the decrement function
function runTime() {
	intrevalID = setInterval(decrement, 1000);
}

//subtract 1 from time, and display it to the DOM, then check if it is zero, if true, run stopGame()
function decrement() {
	time--;
	$('#timer').html(time);

	if (time === 0) {
		stopGame();
	}
}

//checks all available answers, each correspoding to each array.
//passes the radio buttons value attribute as a parameter, works dynamically using arguments.length (arguments works as an array)
//check if passed paramenter equals to the rightAnswer property for each question index
//writes variables into DOM
function checkAnswers() {
	const answerArray = [];
	for (j = 0; j < arguments.length; j++) {
		answerArray[j] = arguments[j];
	}
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
	$('#right').text(right);
	$("#wrong").text(wrong);
	$("#unanswered").text(unanswered);
}

//clears intrevalID timer and catches each value attribute of each checked radio button. 
//passes each variable to checkAnswers() as paramenter
function stopGame() {
	clearInterval(intrevalID);
	$('#questionScreen').addClass('is-hidden');
	$('#resultsScreen').removeClass('is-hidden');
	const radioValue1 = $("input[name='question1']:checked").val();
	const radioValue2 = $("input[name='question2']:checked").val();
	const radioValue3 = $("input[name='question3']:checked").val();
	const radioValue4 = $("input[name='question4']:checked").val();
	const radioValue5 = $("input[name='question5']:checked").val();
	const radioValue6 = $("input[name='question6']:checked").val();
	checkAnswers(radioValue1, radioValue2, radioValue3, radioValue4, radioValue5, radioValue6);
}


$(document).ready(function() {
	//removes the #startScreen div and shows the #questionScreen
	$('#startScreen').click(function() {
		$('#startScreen').addClass('is-hidden');
		$('#questionScreen').removeClass('is-hidden');
		addQuestions();
		runTime();
	})

	//runs checkAnswers, hides #questionScreen and shows #resultsScreen
	$('#submitButton').click(function() {
		stopGame();
	})

	$('#restartButton').click(function() {
		location.reload();
	})
})