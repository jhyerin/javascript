/**
 * Array Function 
 */
let iveMembers = [
  '안유진',
  '장원영',
  '레이',
  '리즈',
  '가을',
  '이서'
]

console.log(iveMembers);

//push()
console.log(iveMembers.push('코드'));
console.log(iveMembers);

console.log(' pop ----------- ');
// pop()
console.log(iveMembers.pop());
console.log(iveMembers);

console.log(' shift ----------- ');
//shift()
console.log(iveMembers.shift());
console.log(iveMembers);

console.log(' unshift ----------- ');
//unshift()
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);


console.log(' splice ----------- ');
//splice
console.log(iveMembers.splice(0,3));
console.log(iveMembers);

console.log(' ------------- ');
/**
 * 위와 같은 함수는 잘 사용 하지 않음
 * 한번 선언한 변수 값은 변경하지 않는다는 코딩 방식 때문
 */
iveMembers = [
  '안유진',
  '장원영',
  '레이',
  '리즈',
  '가을',
  '이서'
]

console.log(iveMembers);

// concat()
console.log(iveMembers.concat('코드'));
console.log(iveMembers);

// slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread pterator
let iveMembers2 = [
  ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
  iveMembers,
]
console.log(iveMembers3);

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([...iveMembers,] === iveMembers);


// join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort() 적렬
// 오름차순
iveMembers.sort();
console.log(iveMembers);

// 거꾸로 
console.log(iveMembers.reverse());

let numbers = [2,3,4,6,1,7,];
console.log(numbers);

//a,b를 비교 했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0 보다 큰 숫자 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b) =>{
  return a > b ? 1: -1;
});
console.log(numbers);

numbers.sort((a,b)=>a>b ? -1: 1);
console.log(numbers);

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
  if(x === '안유진'){
    return `아이브: ${x}`;
  } else {
    return x;
  }
}));

// map을 사용해도 기존의 함수는 변경 되지 않음
console.log(iveMembers);

// filter()
numbers = [1,4,7,3,8];

console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n,0));