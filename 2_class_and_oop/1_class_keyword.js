/** 
 * Class Keyword
 * 키노트 존재 
 */
class IdolModel{
  // 프로퍼티(속성)를 입력하는게 기본 이지만 js는 선언 안해도 괜춘
  // 하지만 다른 사람과 소통을 위해 입력해 주자
  // but constructor에 this 키워드 써서 한번 저장은 필수
 name;
 year;

  constructor(name, year){
    this.name = name;  //this = 현재 인스턴스
    this.year = year;
  }

  // 메소드 정의
  sayName(){
    return `안녕하세요 ${this.name} 입니다.`;
  }
}

// constructor - 생성자
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const rai = new IdolModel('레이', 2004);
console.log(rai);
const wonYong = new IdolModel('원영', 2004);
console.log(wonYong);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const esso = new IdolModel('이서', 2007);
console.log(esso);

console.log(esso.name);
console.log(yuJin.sayName());

console.log(typeof IdolModel);  // function -> class는 함수
console.log(typeof yuJin); // Object
