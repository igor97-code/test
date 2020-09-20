const quizes = {
    activQuiz: 0,
    currentPoints: 0,
    items: [
        {
            Questions: 'Какого цвета небо?',
            correct: 0,
            Answers: ['Синего', 'Зеленого', 'Оранжевого', 'Желтого'],
            Points: 20
        },
        {
            Questions: 'В каком году основали СПБ?',
            correct: 3,
            Points: 35,
            Answers: ['1790', '1765', '1705', '1703']
        },
        {
            Questions: 'Имя одного из основателей Apple?',
            correct: 3,
            Points: 45,
            Answers: ['Джесси Айзенберг', 'Тим Кук', 'Форест Гамп', 'Стив Возняк']
        },
    ]
}






const quizReducer = (state = quizes, action) => {
    switch (action.type) {
        case 'succes':
            let succesState = JSON.parse(JSON.stringify(state));
            succesState.activQuiz++;
            succesState.currentPoints += succesState.items[action.index].Points;
            return succesState
        case 'fail':
            let failState = JSON.parse(JSON.stringify(state));
            failState.activQuiz++;
            return failState
        case 'reStart':
            let reStartState = JSON.parse(JSON.stringify(state));
            reStartState.activQuiz = 0;
            reStartState.currentPoints = 0;
            return reStartState;
        default:
            return state
    }
}
export default quizReducer