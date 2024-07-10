/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

const age = 32;

console.log(typeof age);

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-------------');

/**
 * String 타입
 */
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

/**
 * Template Literal -> `` 백틴 사용 
 * 
 * Escaping Character
 * 1) newling -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력
 */
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYong = '아이브\t장원영';
console.log(iveWonYong);
const backSlash = '아이브\\장원영';
console.log(backSlash);
const smallQutoation = '아이브\'코드백토리';
console.log(smallQutoation);

const iveWonYong2 = `아이브
장원영`;
console.log(iveWonYong2);
console.log(typeof iveWonYong2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화 하지 않았을때 지정되는 값
 * 
 * 직접 Undefined로 값을 초기화하는건 지양 
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할때 사용
 */
let init = null;
console.log(init);
console.log(typeof init); // object null type으로 인식 되어야 하지만 개발자도 인정한 오류


/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용 
 */
const test1 = '1';
const test2 = '2';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);


/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져 있음
 * Key:value
 */
const dictionary = {
  red: '빨간색',
  orange: '주황색'
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(typeof dictionary);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 */
const iveMemberArray = [
  '안유진',
  '장원영',
  '리즈',
  '레이',
  '가을',
  '이서'
]
console.log(iveMemberArray);

/** 
 * index
 * 
 * 0부터 시작 
 * 1씩 증가
*/

console.log(iveMemberArray[0]);
iveMemberArray[0] = '코드';
console.log(iveMemberArray);
console.log(typeof iveMemberArray);


/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언 하지 않고 값에 의해 타입을 '추론'한다
 * JS -> dynamic typing
 * /