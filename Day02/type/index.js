// 문자 타입:'' ,"", ``
// 숫자 타입 : 100, 3.14

//문자 - > 숫자
// 1. Number("문자"), parseInt("문자")
const num = Number("100");
const num1 = parseInt("100"); //정수로 해석

// 두 수 입력 후 합치기
const f = window.prompt("첫 숫자를 입력하시오");
const s = window.prompt("두번째 숫자를 입력하시오");
const sum = Number(f) + Number(s);
window.alert(`두 수의 합은 ${sum} 입니다`);

// 숫자 -> 문자
//1.String(숫자)
const str = String(100); // "100"

//2. ""+ anyType
const str1 = 100 + ""; //"100"

//불리언 타입[true or false]
const bool = true;
const bool1 = false;
const bool2 = "true";
const bool3 = "false";

//Null[비어있음]
//Undefined[정의 되지 않음]
