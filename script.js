"use strict"

const questionsUl = document.querySelector('.questions')
questionsUl.style.padding = '0'
questionsUl.style.margin = '0'

const questions = [{
        caption: 'Подія натискання на елемент називається click?',
        correctAnswer: true
    },
    {
        caption: 'Усередині розмітки не можна додати обробник події?',
        correctAnswer: false
    },
    {
        caption: 'Припинити спливання події можна за допомогою метода stopImmediatePropagation?',
        correctAnswer: false
    },
    {
        caption: 'Припинити спливання події можна за допомогою метода stopPropagation?',
        correctAnswer: true
    }
]

for (const question of questions) {
    const li = document.createElement('li')
    questionsUl.appendChild(li)
    li.style.listStyleType = 'none'
    li.style.display = 'flex'

    const input = document.createElement('input')
    input.type = 'checkbox'
    li.appendChild(input)

    const p = document.createElement('p')
    p.innerHTML = question.caption
    li.appendChild(p)
}

const resultsButton = document.querySelector('.check')

resultsButton.addEventListener('click', function () {
    const checkbox = document.querySelectorAll('input')
    const questionResult = []
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].correctAnswer === checkbox[i].checked) {
            questionResult.push(questions[i])
        }
    }
    alert(`Your result is ${questionResult.length}/${questions.length}`)
})