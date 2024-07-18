//operator[연산자]
// 연산:something을 가공함
//token : +,-,*,/,=,!,~,`,''

// 수리연산[-,+,*,/]
const a = 1 + 2; //3
const a1 = 1 - 2; //-1
const a2 = 1 * 2; //2
const a3 = 1 / 2; //0.5
const a4 = 2 ** 2; // 2의2제곱
const a5 = 3 % 2; //나머지 연산 1

//문자열 연결 연산
const a6 = 10 + "10";

//단항 덧셈 연산
const a7 = +"100"; // 숫자 100

//단항 뺄셈 연산
const a8 = -1; // 부호 반대

// 대입 연산[= , += , -= ,*= , **=,/=,%=]
const name = "godar";
const b1 = 100; // 100
const b2 = 100 + b1; //200

//비교 연산[>,<,>=,<=,==,!=]
const c = 5 > 3; //ture
const c1 = 5 >= 3; //ture
const c2 = 5 > 3; //false

const c3 = 5 > 3; //false
const c4 = "5" == 5; //ture
const c5 = 5 > 3; //false

// 논리 연산[&& ,|| ,!](and , or , not)
//&&[and] : 하나라도 틀리면 false
//||[or] : 하나라도 맞으면 ture
//![not] : 반대 true -> false
const d = 5 > 3 && 5 > 7; // false
const d1 = 5 > 3 || 5 > 7; // ture
const d2 = !(5 > 3 && 5 > 4); // false

//삼항 연산자
//조건  ? 참 : 거짓
const e = 5 > 3 ? "장원영" : "안유진"; // 장원영
const e1 = 5 > 7 ? "아이유" : "비비"; // 비비

//typeof 연산자
const f = typeof 1; // Number
const f1 = typeof !false; // Boolean
