/**
 *  Static Keyword
 */
class IdolModel{
  name;
  year;
  // static은 class 자체에 귀속됨, 인스턴스가 아닌
  static groupName = '아이브';

  constructor(name,year){
    this.name = name;
    this.year = year;
  }

  static returnGroupName(){
    return '아이브';
  }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);
console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());


/**
 *  factory constructor
 */
class IdolModel2{
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }
  static fromObject(Object){
    return new IdolModel2(
      Object.name,
      Object.year,
    );
  }

  static fromList(list){
    return new IdolModel2(
      list[0],
      list[1],
    )
  }
}

const yujin2 = IdolModel2.fromObject({name: '안유진', year: 2003,});
console.log(yujin2);

const wonYong =IdolModel2.fromList(
  ['장원영', 2003]
);
console.log(wonYong);