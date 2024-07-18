// 일반 함수
function name(x) {
  return `${x}님 안녕하세요!`;
}
const a2 = name("고달"); // a2에 "고달님 안녕하세요" 가  저장

// 화살표 함수
const a = (x) => {
  return `${x}님 안녕하세요`;
};
const b = a("엄준식"); // b에 "엄준식님 안녕하세요" 가 저장됨 / a는 함수 이름
console.log(b);

// -----------------------
const square = (x, y) => {
  return x ** y;
};
const c = square(2, 4);
console.log(c);
// ----------------
const r = (x) => {
  return `${x}러키비키잖아`;
};
const c2 = r("완전");
console.log(c2);
