// mefacoff

// 커피 메뉴 : 아아 라떼 아이스티
// 아아: 2000,5
// 라떼 3000, 150
// 아이스티: 2500,200
// 쿠키 메뉴 : 초고 녹차 마카다르
// 초코: 2500:300
// 녹차: 2500,300
// 마카다르: 3000 , 400
const coffee = window.prompt("커피를 골라주세요(아아 / 라떼 / 아이스티)");
const cookie = window.prompt("쿠키를 골라주세요(초코 / 녹차 / 마카다르)");
const a = ["아아", 2000, 5];
const b = ["라떼", 3000, 150];
const c = ["아이스티", 2500, 200];
const d = ["초코", 2500, 300];
const e = ["녹차", 2500, 300];
const f = ["마카다르", 3000, 400];
const main = {
  아아: a,
  라떼: b,
  아이스티: c,
  초코: d,
  녹차: e,
  마카다르: f,
};
console.log(`구매한 매뉴 :${coffee}와 ${cookie}`);
console.log(`구매한 가격 :${main[coffee][1] + main[cookie][1]}`);
console.log(`총 칼로리 :${main[coffee][2] + main[cookie][2]}`);
