/*
  spread.js
*/
// 얕은 복사
let arr = [1, 2, 3]; // arr 이름의 배열과 고유 주소를 가짐
let arrcp = arr; // arrcp는 arr과 같은 주소를 가짐 => 동일 주소 다른 값
  // arrcp[0] = 10;
  // console.log(arr);
  // console.log(arrcp);

// 깊은 복사
function arrayDeepCopy(){
  let arrDeepCp = [ ... arr ] // arr를 펼쳐서 arrDeepCp라는 이름의 고유 주소를 가진 배열에 복사
  arrDeepCp[0] = 100;
  console.log(arr);
  console.log(arrDeepCp);
}

// 객체 얕은복사
function objectShallowCopy(){
  let emp = { name : "홍길동", age : 20}
  let empCp = emp;
  empCp.age = 30;
  console.log(emp);
  console.log(empCp);
}

// 객체 깊은복사
function objectDeepCopy(){
  let emp = { name : "홍길동", age : 20}
  let empCp = { ... emp, name:"김유신"}; // 같은 값이 있으면 name 필드 덮어쓰기
  empCp.age = 30;
  console.log(emp);
  console.log(empCp);
}
objectDeepCopy();

// 가변인수 var
// function func(...arg)