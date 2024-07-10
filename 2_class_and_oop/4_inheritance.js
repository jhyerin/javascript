/**
 * Inheritance 상속
 */
class IdolModel{
  name;
  year;

  constructor(name,year){
    this.name = name;
    this.year = year;
  }
}

class FemaleIdelModel extends IdolModel{
  dance(){
    return '여자 아이돌이 춤을 춥니다';
  }
}

class MaleIdelModel extends IdolModel{
  sing(){
    return '남자 아이돌이 춤을 춥니다.'
  }
}

// 상속 받게 되면 프로퍼티 뿐만 아니라 생성자도 상속 받음
const yuJin = new FemaleIdelModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdelModel('지민', 2003);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

//console.log(yuJin.sing()); // Error

const cf = new IdolModel('코드', 2000);
console.log(cf);
//console.log(cf.dance()); //error 부모가 자식 class 상속 X

// 인스턴스 확인
console.log(yuJin instanceof IdolModel); //true
console.log(yuJin instanceof FemaleIdelModel); // true
console.log(yuJin instanceof MaleIdelModel);  //false

console.log(jiMin instanceof IdolModel); //true
console.log(jiMin instanceof FemaleIdelModel); // fals
console.log(jiMin instanceof MaleIdelModel);  // true

console.log('------------');
console.log(cf instanceof IdolModel); // true
console.log(cf instanceof FemaleIdelModel); // fals
console.log(cf instanceof MaleIdelModel);  // fals