//  함수 f(X) - function

function icecream(x) {
  console.log(`${x}맛 아이스크림 꿀맛`);
}
// icecream("녹차");
// icecream("초코");
// icecream("딸기");

// ------------
function num(n) {
  if (n % 2 == 0) {
    console.log("짝수");
  } else {
    console.log("홀수");
  }
}

// num(2);
// num(5);

// -----------------
function makeDouble(j) {
  // return : 함수의 결과를 돌려줌
  return j * 2;
}
// const a = makeDouble(10);
// console.log(a);
// -------------------
function hello(x) {
  return `안녕하세요 ${x || "Guest"}님!`;
}
// ------------------
function add(x, y) {
  return x + y;
}
function minus(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function square(x, y) {
  return x ** y;
}
const a2 = add(20, 10); // a2에 30이 저장
