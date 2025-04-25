function calc() {
const number = document.querySelector("#number_display");//数字
const plus = document.querySelector("#plus_button");//足し算足し算
const minus = document.querySelector("#minus_button");//引き算
const times = document.querySelector("#times_button");//掛け算
const div = document.querySelector("#div_button");//割り算
const reset = document.querySelector("#reset_button");//リセットボタン


plus.onclick = () => {
  const numberDisplay = Number(number.textContent);
  number.textContent =  numberDisplay + 1;
}

minus.onclick = () => {
  const numberDisplay = Number(number.textContent);
  number.textContent =  numberDisplay - 1;
}

times.onclick = () => {
  const numberDisplay = Number(number.textContent);
  number.textContent =  numberDisplay * 2;
}

div.onclick = () => {
  const numberDisplay = Number(number.textContent);
  number.textContent =  numberDisplay / 2;
}

reset.onclick = () => {
  const numberDisplay = Number(number.textContent);
  number.textContent =  100;
}



}
calc()