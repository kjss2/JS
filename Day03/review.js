// const n = Number(window.prompt("밑변을 입력하시오"));
// const h = Number(window.prompt("높이을 입력하시오"));
// window.alert(`정삼각형의 넓이는 ${(n * h) / 2}`);
// ---------------------------------------------------
// const a = Number(window.prompt("정수를 입럭하시오"));
// const b = a > 0 ? "양수" : a == 0 ? "0" : "음수";
// window.alert(`입력한 값은 ${b}입니다`);
// ---------------------------------------------------
// const i = window.prompt("5자리 정수를 입력하시오");
// const tenThousand = parseInt(num1 / 10000);
// const thousand = parseInt((num1 % 10000) / 1000);
// const hundred = parseInt((num1 % 1000) / 100);
// const ten = parseInt((num1 % 100) / 10);
// const one = parseInt(num1 % 10);
// window.alert(`${tenThousand}만${thousand}천${hundred}백${ten}십${one}`);
// -------------------------------------------------
const f = window.prompt("5자리 정수를 입력하시오");
const g = parseInt((f % 1000) / 100) * 100;
window.alert(`${g}`);
