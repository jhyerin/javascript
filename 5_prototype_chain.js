/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값
console.log(testObj.__proto__); //[Object: null prototype] {}

function IdolModel(name, year){
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype); // {}

console.dir(IdolModel.prototype,{
  showHidden: true // 감춰져 있는 사항 확인 
});

// circular reference 상속체인
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype == IdolModel.prototype); //true

const yuJIn = new IdolModel('안유진', 2003);

console.log(yuJIn.__proto__); // {}
console.log(yuJIn.__proto__ === IdolModel.prototype); // true

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype);//true
console.log(Function.prototype.__proto__ === Object.prototype);//true
console.log(IdolModel.prototype.__proto__ === Object.prototype); //true 

console.log(yuJIn.toString()); // 위에서 tostring 정의 한 적 없지만 object로 나옴
console.log(Object.prototype.toString());

function IdolModel2(name, year){
  this.name = name;
  this.year = year;

  this.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
  }
}

const yuJIn2 = new IdolModel2('안유진', 2003);
const wonYong2 = new IdolModel2('장원영', 2002);

console.log(yuJIn2.sayHello());
console.log(wonYong2.sayHello());
console.log(yuJIn.sayHello === wonYong2.sayHello); // false

console.log(yuJIn2.hasOwnProperty('sayHello'));

function IdolModel3(name, year){
  this.name = name;
  this.year = year;
}

IdolModel3.prototype.sayHello = function(){
  return `${this.name}이 인사를 합니다.`;
}

const yuJIn3 = new IdolModel3('안유진', 2003);
const wonYong3 = new IdolModel3('장원영', 2004);

console.log(yuJIn3.sayHello());
console.log(wonYong3.sayHello());

console.log(yuJIn3.sayHello === wonYong3.sayHello);

console.log(yuJIn3.hasOwnProperty('sayHello'));

IdolModel3.sayStaticHello = function(){
  return `안녕하세요 저는 static method 입니다.`;
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function(){
    return '안녕하세요 저는 인스턴스 메서드 입니다.';
  }
}

IdolModel4.prototype.sayHello = function(){
  return '안녕하세요 저는 prototype 메서드 입니다.';
}

const yuJIn4 = new IdolModel4('안유진', 2003);

// 프로퍼티 쉐도잉 - class에서 override
console.log(yuJIn4.sayHello());

/**
 * getPrototpeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year){
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function(){
  return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year){
  this.name = name;
  this.year = year;

  this.dance = function(){
    return `${this.name}이 춤을 춥니다.`;
  }
}

const gaEul = new IdolModel('가을',2002);
const ray = new FemaleIdolModel('레이',2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
//console.log(ray.sayHello());

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel);
console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

//함수의 변경
FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);