// regExp.js : 정규표현식

let text = "Visit W3Schools! test";
const exp = /w3schools/i; // i => 대소문자 구분 X / $ => endwith(마지막으로 끝나는) / ^ => startwith(시작하는)
let n = text.search(exp);
console.log(n)

let bool = exp.test(text)
console.log(bool)

// 숫자 3자리만
let numExp = /^[\S][\d]{2}$/
let numText = 'a3@'
bool = numExp.test(numText)
console.log('숫자표현 ',bool);