/**
 * Usingfunction to create objects
 */ 
function IdolModel(name, year){
//console.log(this);
  //console.log(new.target);

// undefined 이면 생성자 함수로 변경해줌 
if(!new.target){
  return new IdolModel(name, year);
}
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  }
}

const yuJIn = new IdolModel('안유진', 2003);
console.log(yuJIn);
//console.log(yuJIn.dance());

const yuJIn2 = IdolModel('안유진', 2003); // 생성자 함수이면 new 키워드 필수 
console.log(yuJIn2); // undefined
//console.log(global.name);

// new 키워드는 arrow 함수에서 사용 불가 
const IdolModelArrow = (name,year)=> {
  this.name = name;
  this.year = year;
};

const yuJIn3 = new IdolModelArrow('안유진', 2003);