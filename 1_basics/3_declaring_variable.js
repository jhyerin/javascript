/** 
 * Variable 선언 하기
 * 
 * 1) var - 사용 X
 * 2) let
 * 3) const 
 * */ 

var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);
/** 
 * let과 var로 선언하면 
 * 값을 추후 변경 가능 
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리';   error

/** 
 * 선언과 할당
 * 
 * 1) 변수를 선언하는것 
 * 2) 할당
 */


let girlFriend;
console.log(girlFriend); //Undefined

const girlFriend2; // 나중에 값을 못 바꾸니까 undefined 값을 가지지 못함