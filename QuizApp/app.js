const dataArray = [

    {
        "id":0,
        "question": " Türkiye'nin başkenti neresidir? ",
        "answer": "ANKARA"
    },
    {
        "id":1,
        "question": " Fransa'nin başkenti neresidir?",
        "answer": "PARIS"
    },
    {
        "id":2,
        "question": " İngiltere'nin başkenti neresidir? ",
        "answer": "LONDRA"
    },
    {
        "id":3,
        "question": " 25 + 25 kactir  ",
        "answer": "50"
    }
]
document.getElementById('question0').innerHTML = dataArray[0].question
document.getElementById('question1').innerHTML = dataArray[1].question
document.getElementById('question2').innerHTML = dataArray[2].question
document.getElementById('question3').innerHTML = dataArray[3].question

let score = 0;

document.getElementById('send').addEventListener("click", function(){
    if (document.getElementById('answer0').value.toUpperCase() === dataArray[0].answer) {
        score+=1;
    }
    if (document.getElementById('answer1').value.toUpperCase() === dataArray[1].answer) {
        score+=1;
    }
    if (document.getElementById('answer2').value.toUpperCase() === dataArray[2].answer) {
        score+=1;
    }
    if (document.getElementById('answer3').value.toUpperCase() === dataArray[3].answer) {
        score+=1;
    }
    document.getElementById('result').innerHTML = "Score: " + score
})