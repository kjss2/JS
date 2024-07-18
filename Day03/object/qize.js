// const bookName = window.prompt("책 재목 입력");
// const bookPrice = window.prompt("책 가격 입력");
// const bookPublisher = window.prompt("책 출판사 입력");
// const book = {
//   title: bookName,
//   price: bookPrice,
//   publisher: bookPublisher,
// };
// console.log(book);

// --------------------------------------------------

// const m = window.prompt("e or i?");
// const b = window.prompt("n or s?");
// const t = window.prompt("t or f?");
// const i = window.prompt("j or p?");
// const mbti = {
//   a: m,
//   b: b,
//   c: t,
//   d: i,
// };
// const question1 = "e" || "E" in mbti ? "외향적" : "내향적";
// const question2 = "n" || "N" in mbti ? "직관적" : "감각적";
// const question3 = "t" || "T" in mbti ? "사고적" : "감정적";
// const question4 = "j" || "J" in mbti ? "판단적" : "인식적";
// console.log(
//   `${question1}이고 ${question2}이고 ${question3}이고 ${question4}네요`
// );

//-----------------------------------------------------------

const year = window.prompt("태어난 연도 입력");
const n = year % 12;
const a = {
  0: "원숭이띠",
  1: "닭띠",
  2: "개띠",
  3: "돼지띠",
  4: "쥐띠",
  5: "소띠",
  6: "호랑이띠",
  7: "토끼띠",
  8: "용띠",
  9: "뱀띠",
  10: "양띠",
  11: "말띠",
};
console.log(`당신의 띠는 ${a[n]}입니다`);
