/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

// console.log(name); // Undefined
// var name = '코드팩토리';
// console.log(name);

/**
 *  Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 * JS에만 있는 현상
 */
// var name;
// console.log(name);
// name = '코드팩토리'
// console.log(name);

console.log(yuJin);
let yuJin = '안유진';  // cannot access 'yuJin' ~~ 
//const yuJin = '안유진'; const도 마찬가지로 에러 나옴
//var가 아닌 let과 const는 hoisting이 발생 하기 때문에 이두개를 사용해야한다