// 조건문
const m = () => {
  const n = prompt("범죄도시 , 인사이드아웃 , 핸섬가이즈");
  if (n == "범죄도시") {
    return 10000;
  } else if (n == "인사이드아웃") {
    return 11000;
  } else if (n == "핸섬가이즈") {
    return 12000;
  } else {
    return "잘못입력하셨습니다";
  }
};
const a = m();
console.log(a);
// ------------------------------------------------
// 다른거
// const j = () => {
//   const i = prompt("범죄도시 , 인사이드아웃 , 핸섬가이즈");
//   const price = {
//     범죄도시: 10000,
//     인사이드아웃: 11000,
//     핸섬가이즈: 12000,
//   };
//   return price[i];
// };
// const b = j();
// console.log(b);

// --------------------------------------------------------------
const num = () => {
  const x = prompt("1숫자 입력");
  const y = prompt("2숫자 입력");
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  }
};
const c = num();
console.log(c);
// --------------------------------------------------------------
const str = () => {
  const x1 = prompt("1단어 입력");
  if (x1 === x1.toUpperCase()) {
    return x1.toLowerCase();
  } else {
    return x1.toUpperCase();
  }
};
const y2 = str();
console.log(y2);
// -------------------------------------------------------------
const q = () => {
  const word = prompt("2단어 입력");
  const number = prompt("3숫자 입력");
  return word.slice(0, number);
};
const p = q();
console.log(p);
