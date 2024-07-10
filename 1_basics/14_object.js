/**
 *  Object 객체
 */

// key : value pair
let yuJin = {
  name: '안유진',
  group: '아이브',
  dance: function(){
    return `${this.name}이 춤을 춥니다.`;
  }
};
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance());


const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
  [nameKey] : nameValue,
  [groupKey] : groupValue,
  dance: function(){
    return `${this.name}이 춤을 춥니다.`;
  }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드';
console.log(yuJin2);

yuJin2['english'] = ' an yu jin';
console.log(yuJin2);

delete yuJin2['english'];
console.log(yuJin2);


/**
 *  const로 선언한 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경 할 수 없음
 * 2) 객체 안의 프로퍼티나 메서드는 변경 가능
 */
const wonYong = {
  name: '장원영',
  group: '아이브'
}
console.log(wonYong);

//wonYong = {};   ERROR

wonYong['group'] = '코드';
console.log(wonYong);

/**
 * 모든 키값 다 가져오기
 */

console.log(Object.keys(wonYong));


/** 
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYong));

const name = '안유진';

const yuJin3 = {
  name, // == name: name
};
console.log(yuJin3);
