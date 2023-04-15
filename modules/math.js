// -------1--------------- / 모듈 그 자체를 add 함수를 할당
// function add (a, b) {
//     return a + b;
// }

// module.exports = add


// -------2--------------- / 모듈을 호출했을 때, add 키 값에는 (a,b){return a + b}; 익명함수 할당
// exports.add = function (a, b) {
//     return a+ b;   
// }


// -------3--------------- / 모듈을 호출했을 때, add 키 값에 add 함수가 들어가는 방식
function add (a, b) {
    return a + b;
}

module.exports = { add : add};


// -------4--------------- / 모듈을 호출했을 때, add 키 값에는 add 변수 함수가 가지고 있는 값이 할당
// const add = (a, b) => {
//     return a+b;
// }
// exports.add = add;