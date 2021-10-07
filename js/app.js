const timeBtns = document.querySelectorAll(".profile__navigation-item");
const timeElements = document.querySelectorAll(
	"#info-block__content-computed-time"
);

timeBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		for (let i = 0; i < timeBtns.length; i++) {
			timeBtns[i].classList.remove("active");
		}

		e.target.parentElement.classList.add("active");
		if (e.target.classList.contains("weekly")) {
			timeElements.forEach(
				(item) => (item.innerHTML = "<span>Last Week</span>")
			);
		} else if (e.target.classList.contains("daily")) {
			timeElements.forEach(
				(item) => (item.innerHTML = "<span>Yesterday</span>")
			);
		} else if (e.target.classList.contains("monthly")) {
			timeElements.forEach(
				(item) => (item.innerHTML = "<span>Last Month</span>")
			);
		} else {
			timeElements.forEach(
				(item) => (item.innerHTML = "<span>Last Week</span>")
			);
		}
	});
});
