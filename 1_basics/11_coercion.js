/**
 * 타입 변환
 * Type Conversion
 * 
 * 1)명시적
 * 2)암묵적
 */
let age = 32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2); //196 string에는 곱한다는 개념이 없으니 숫자로 인식
console.log('98' - 2);

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

//숫자 타입으로 변환
console.log(typeof parseInt('0.99'),parseInt('0.99'));
console.log(typeof parseFloat('0.99'),parseFloat('0.99'));
console.log(typeof +'1', +'1');

/**
 * Boolean 타입으로 변환
 */
// string 값이 있으면 true 없으면 false
console.log(!!'x'); // true
console.log(!!''); // false

console.log(!!0); // false
console.log(!!'0'); // true
console.log(!!'false'); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false

console.log(!!{}); //object 무조건 true
console.log(!![]); //array 무조건 true

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0 
 * 
 * 모두 false를 반환
 */