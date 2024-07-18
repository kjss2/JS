// object 타입
const americano = {
  name: "아메리카노",
  price: 3000,
  shot: 2,
  bean: "에티오피아",
};
console.log(americano.name);
console.log(americano.bean);

console.log(americano["name"]);
console.log(americano["shot"]);
// 속성 추가
americano.decaffein = false;
// 삭제
delete americano.shot;
console.log(americano["shet"]);

// objedtdp 존재 유무
console.log("price" in americano ? "ok" : "no");
