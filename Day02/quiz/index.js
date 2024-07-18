const coffee1 = window.prompt("커피 종류를 입력하시오");
const coffee2 = window.prompt("커피의 샷 량을 입력하시오");
const density = coffee2 >= 3 ? "진하게" : "연하게";
window.alert(`${coffee1}커피가 ${density} 나왔습니다`);
// -------------
const n = window.prompt("정수를 입력하시오");
const num = n % 2 == 0 ? "짝수" : "홀수";
window.alert(`입력한 숫자는 ${num}입니다`);
