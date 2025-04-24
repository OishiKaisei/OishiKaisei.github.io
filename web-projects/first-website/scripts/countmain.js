function count() {
    //三角形
	const up = document.querySelector("#countup-id-top");
	const down = document.querySelector("#countdown-id-top");
    const upbottom = document.querySelector("#countup-id-bottom");
    const downbottom = document.querySelector("#countdown-id-bottom");
    //数字
	const top = document.querySelector("#top-id");
	const bottom = document.querySelector("#bottom-id");
    //バツボタン
    const vatu = document.querySelector("#vatubottom");
	up.onclick = () => {
		const topCount = Number(top.textContent);
		top.textContent = topCount + 1;
	};

	down.onclick = () => {
		const bottomCount = Number(top.textContent);
		top.textContent = bottomCount - 1;
	};

    upbottom.onclick = () => {
		const topCountbotton = Number(bottom.textContent);
		bottom.textContent = topCountbotton + 1;
	};

	downbottom.onclick = () => {
		const bottomCountbottom = Number(bottom.textContent);
		bottom.textContent = bottomCountbottom - 1;
	};
    vatu.onclick = () =>{
        top.textContent = 20;
        bottom.textContent = 20;
    }
}

count();

