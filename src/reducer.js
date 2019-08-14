// функция reducer должна быть чистой функцией
// если забыл это - гугли!
// запрещенно:
// вызывать текущее время, генератор случайных чисел, изменять DOM, вызов сервера
//у функции не должно быть побочного эффекта, запрещено :
// устанавливать таймаут, запрос на сервер, работа с до, интервал, значения в локалстор
const reducer = (state = 15, action) => {
    switch (action.type) {
        case 'RND':
            return state + action.payload;
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
}

export default reducer;