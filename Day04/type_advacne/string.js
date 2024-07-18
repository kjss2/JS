const coffee = "americano";

// 포함 유뮤
coffee.includes("a"); // a가 있는지 -> true or false
// 몇 번쨰에 있는지 없다면 -1
coffee.indexOf("r"); // r이 몇 번째에 있는지

// 단어 교체
coffee.replace("a", "z"); // a -> z 교체
// 이 단어로  시작하는지 -> true or false
coffee.startsWith("ameri"); //"ameri"로 시작하는지
// 이 단어로 끝나는지 -> true or false
coffee.endsWith("cano"); //"cano"로 끝나는지
// 잘라서 저장
coffee.slice(0, 5); //"ameri" 저장(0~5)
// 대문자화
coffee.toUpperCase();
//  소문자화
coffee.toLowerCase();
// 이것 기준으로 나누어 배열화(타입 변화)
coffee.split("i"); //i기준으로 나누어 배열 [amer,cano]
//반복실행
coffee.repeat(3); //americanoamericanoamericano
