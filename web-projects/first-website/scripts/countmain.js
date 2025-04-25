function count() {
    //カウントボタン
	const topCountUpButton = document.querySelector("#top_count_up");
	const topCountDownButton = document.querySelector("#top_count_down");
    const bottomCountUpButton = document.querySelector("#bottom_count_up");
    const bottomCountDownButton = document.querySelector("#bottom_count_down");
    //数字
	const topNumber = document.querySelector("#top_number");
	const bottomNumber = document.querySelector("#bottom_number");
    //バツボタン
    const resetButton = document.querySelector("#reset_button");
	topCountUpButton.onclick = () => {
		const topCount = Number(topNumber.textContent);
		topNumber.textContent = topCount + 1;
	};

	topCountDownButton.onclick = () => {
		const topCount = Number(topNumber.textContent);
		topNumber.textContent = topCount - 1;
	};

    bottomCountUpButton.onclick = () => {
		const bottomCount = Number(bottomNumber.textContent);
		bottomNumber.textContent = bottomCount + 1;
	};

	bottomCountDownButton.onclick = () => {
		const bottomCount = Number(bottomNumber.textContent);
		bottomNumber.textContent = bottomCount - 1;
	};
    resetButton.onclick = () =>{
        topNumber.textContent = 20;
        bottomNumber.textContent = 20;
    }
}

count();
