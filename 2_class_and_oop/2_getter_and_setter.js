/**
 *  Getter and Setter
 */
class IdolModel{
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }
  
  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반활 할 때
   * 2) private한 값을 반활할때
   */
  get nameAndYear(){
    return `${this.name}-${this.year}`;
  }

  
  set setName(name){
    this.name = name;
  }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = '장원영';
console.log(yuJin);

// private 값 정의해서 사용, # => es7에서 지원
class IdolModel2{
  #name;
  year;

  constructor(name, year){
    this.#name = name;
    this.year = year;
  }

  get name(){
    return this.#name;
  }

  set name(name){
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // year 값만 가져옴, name 값 접근 안됨 -> getter 사용해서 가져올수 있음
console.log(yuJin2.name);
yuJin2.name = '코드';
console.log(yuJin2.name);