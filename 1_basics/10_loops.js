/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for(let i = 0; i < 10; i++){
  console.log(i);
}

for(let i = 10; i > 0; i --){
  console.log(i);
}

for(let i=0; i < 3; i++){
  for (let j=3; j > 0; j--){
    console.log(i,j);
  }
}

// * 을 이용해서 6*6dml 정사각형을 출력해라
let square = '';
let side = 6;
for ( let i = 0; i < 6; i ++){
  for(let j = 0; j < 6; j ++){
    square += '*';
  }
  square += '\n';
}
console.log(square);

/**
 * for...in
 */
const yuJin = {
  name: '안유진',
  year: 2003
}
for(let key in yuJin){
  console.log(key);
}

const iveMemberArray = ['안유진', '장원영','가을','레이','리즈','이서'];

for(let key in iveMemberArray) {
  console.log(key);
  console.log(`${key}:${iveMemberArray[key]}`);
}

/**
 * for...of
 */
for(let value of iveMemberArray){
  console.log(value);

}

/**
 * while
 */
let number = 0;

while(number < 10){
  number ++;
}

console.log(number);

/**
 * do...while
 * 사용 거의 안함
 */
number = 0;
do {
  number ++;
} while (number < 10);
console.log(number);

/**
 * break
 */
console.log(' ------------- ');
for(let i = 0; i < 10; i++){
  if(i === 5){
    break;
  }
  console.log(i);
}

number = 0;

while(number < 10){
  if(number === 5){
    break;
  }
  number ++;
  console.log(number);
}

/**
 * continue
 */
console.log(' continue ------------- ');
for(let i = 0; i < 10; i++){
  if( i === 5){
    continue;
  }
  console.log(i);
}

console.log(' ------------- ');
number = 0;

while (number < 10) {
  number ++;
  if(number === 5){
    continue;
  }
  console.log(number);
}