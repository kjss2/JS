// const n = prompt("각도를 입력하세요");
// if (n > 0 && n < 90) {
//   alert(`예각`);
// } else if (n == 90) {
//   alert(`직각`);
// } else if (n > 90 && n < 180) {
//   alert("둔각");
// } else if (n == 180) {
//   alert(`평각 `);
// }
// ----------------------
const b = prompt("비번을 입력하세여");
if (
  !b.includes("!") &&
  !b.includes("@") &&
  !b.includes("#") &&
  !b.includes("*")
) {
  alert("특수 문자를 입력하세요 ");
} else if (!b.startsWith("IT")) {
  alert("비밀번호 시작을 IT로 시작하세요");
} else if (b.length <= 6) {
  alert("글자수가 6글자보다 많아야 해요");
} else {
  alert("비밀번호 입력 완료");
}
