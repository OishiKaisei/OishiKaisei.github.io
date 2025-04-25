function count() {
    //三角形
	const up = document.querySelector("#countup_id_top");
	const down = document.querySelector("#countdown_id_top");
    const upBottom = document.querySelector("#countup_id_bottom");
    const downBottom = document.querySelector("#countdown_id_bottom");
    //数字
	const top = document.querySelector("#top_id");
	const bottom = document.querySelector("#bottom_id");
    //バツボタン
    const button = document.querySelector("#close_button");
	up.onclick = () => {
		const topCount = Number(top.textContent);
		top.textContent = topCount + 1;
	};

	down.onclick = () => {
		const bottomCount = Number(top.textContent);
		top.textContent = bottomCount - 1;
	};

    upBottom.onclick = () => {
		const topCountButton = Number(bottom.textContent);
		bottom.textContent = topCountButton + 1;
	};

	downBottom.onclick = () => {
		const bottomCountBottom = Number(bottom.textContent);
		bottom.textContent = bottomCountBottom - 1;
	};
    button.onclick = () =>{
        top.textContent = 20;
        bottom.textContent = 20;
    }
}

count();
