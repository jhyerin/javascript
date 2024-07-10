/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서 
 * 반환받고 싶다면 어떻게 해야할까?
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
*/
function calculate() {
  console.log((2 * 10 / 2 % 3).toString());
}
calculate(); 

function calculate(number) {
  console.log((number * 10 / 2 % 3).toString());
  
}

/**
 * 함수에서 입력받는 값에 대한 정의를 parameter라고 한다
 * 
 * 실제 입력하는 값은 argument라고 함
 */
calculate(5); 

function multiply(x, y) {
  console.log(x * y);
}

multiply(2,3);

function multiply(x, y = 10) {
  console.log(x * y);
}
multiply(2,4);
multiply(2);

/**
 * 반환 받기
 * return
 */

function multiply(x, y) {
  return x*y;
}

const result = multiply(2,4);
console.log(result);

const result2 = multiply(2,40);
console.log(result2);

/**
 * Arrow 함수
 */
const multi = (x,y) => {
  return x * y;
}
console.log(multi(2,4));

// 더 간결한 방법 
const multi2 = (x,y) => x * y;
console.log(multi2(4,4));

const multi3 = x => x* 2;
console.log(multi3(4));


const multi4 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multi4(2)(4)(5));

function multi5(x){
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z:${z}`;
    }
  }
}
console.log(multi5(3)(4)(5));

const multiplyTwo = function(x,y) {
  return x * y;
}

console.log(multiplyTwo(4,5));

const multiplyThree = function(x,y,z){
  console.log(arguments);
  return x * y * z;
}

console.log(multiplyThree(3,4,5));

const multiplyAll = function(...arguments){
  return Object.values(arguments).reduce((a,b) => a* b, 1);
}

console.log(multiplyAll(3,4,5,6,7));

//즉시 실행 함수, immediately invoked function
(function (x,y) {
  console.log(x * y);
})(4,5)

console.log(typeof multiply);
console.log(multiply instanceof Object);