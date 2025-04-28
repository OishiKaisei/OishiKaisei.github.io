function calc() {
const calcResult = document.querySelector("#number_display");//数字
const plusButton = document.querySelector("#plus_button");//足し算足し算
const minusButton = document.querySelector("#minus_button");//引き算
const timesButton = document.querySelector("#times_button");//掛け算
const divButton = document.querySelector("#div_button");//割り算
const resetButton = document.querySelector("#reset_button");//リセットボタン


plusButton.onclick = () => {
  const calcResultDisplay = Number(calcResult.textContent);
  calcResult.textContent =  calcResultDisplay + 1;
}

minusButton.onclick = () => {
  const calcResultDisplay = Number(calcResult.textContent);
  calcResult.textContent =  calcResultDisplay - 1;
}

timesButton.onclick = () => {
  const calcResultDisplay = Number(calcResult.textContent);
  calcResult.textContent =  calcResultDisplay * 2;
}

divButton.onclick = () => {
  const calcResultDisplay = Number(calcResult.textContent);
  calcResult.textContent =  calcResultDisplay / 2;
}

resetButton.onclick = () => {
  const calcResultDisplay = Number(calcResult.textContent);
  calcResult.textContent =  100;
}

}
calc()
