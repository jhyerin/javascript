/**
 *  copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('---------');
console.log(original);
console.log(clone);


// 2) 
let originalObj = {
  name: '안유진',
  group: '아이브'
};
let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);

console.log('---------');
originalObj['group'] = '코드';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
  name: '지호',
  group:'코드',
};

cloneObj = {
  name: '지호',
  group:'코드',
};

console.log(original === cloneObj);

const yuJin1 = {
  name: '안유진',
  group: '아이브',
};
const yuJin2 = yuJin1;
const yuJin3 = {
  name: '안유진',
  group: '아이브',
};

//true
console.log(yuJin1 === yuJin2);

//false
console.log(yuJin1 === yuJin3);
//false
console.log(yuJin2 === yuJin3);

/**
 *  Spread Operator
 */

const yuJin4 ={
  ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3); //false

const yuJin5 = {
  year: 2003,
  ...yuJin3,
};
console.log(yuJin5);

//순서의 중요성
const yuJin6 = {
  name: '코드',
  ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
  ...yuJin3,
  name: '코드',
};
console.log(yuJin7);

const numbers = [1,4,3];
const numbers2 = [
  ...numbers,
  10,
];
console.log(numbers2);