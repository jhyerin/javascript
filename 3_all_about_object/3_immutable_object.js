/**
 * Immutable Object
 */
const yuJIn = {
  name : '안유진',
  year : 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    return this.year = new Date().getFullYear() - age;
  }
};

console.log(yuJIn);

/**
 * Extensible
 */
console.log(Object.isExtensible(yuJIn)); //true

yuJIn['position'] = 'vocal';

console.log(yuJIn);

Object.preventExtensions(yuJIn);
console.log(Object.isExtensible(yuJIn)); //false

yuJIn['groupName'] = '아이브';
console.log(yuJIn); // 에러를 던지지는 않고 groupName이 안들어간걸 확인

delete yuJIn['position'];
console.log(yuJIn);  // 삭제는 가능

/**
 *  Seal
 */
const yuJIn2 = {
  name : '안유진',
  year : 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    return this.year = new Date().getFullYear() - age;
  }
};
console.log(yuJIn2);

console.log(Object.isSealed(yuJIn2)); //false

Object.seal(yuJIn2);
console.log(Object.isSealed(yuJIn2)); //true

yuJIn2['groupName'] = '아이브';
console.log(yuJIn2); // 추가 안됨

delete yuJIn2['name'];
console.log(yuJIn2); // 삭제 안됨, 에러도 안남

Object.defineProperty(yuJIn2, 'name',{
  value: '코드팩토리',
});
console.log(Object.getOwnPropertyDescriptor(yuJIn2, 'name'));

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만듬
*/
const yuJIn3 = {
  name : '안유진',
  year : 2003,

  get age(){
    return new Date().getFullYear() - this.year;
  },

  set age(age){
    return this.year = new Date().getFullYear() - age;
  }
};
console.log(Object.isFrozen(yuJIn3));  //false

Object.freeze(yuJIn3); 
console.log(Object.isFrozen(yuJIn3));   //true

yuJIn3['groupName'] = '아이브';
console.log(yuJIn3);

delete yuJIn3['name'];
console.log(yuJIn3);

// Object.defineProperties(yuJIn3,'name',{
//   value: '코드',
// });
console.log(Object.getOwnPropertyDescriptor(yuJIn3, 'name'));

const yuJIn4 = {
  name: '안유진',
  year: 2003,
  wonYong:{
    name: '장원영',
    year: 2002,
  },
};
Object.freeze(yuJIn4);
console.log(Object.isFrozen(yuJIn4)); //true
console.log(Object.isFrozen(yuJIn4['wonYong'])); //false 
