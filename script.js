document.getElementById("closebanner").onclick = () => {
	document.getElementById("tipbanner").remove();
};

const cookieToggle = document.getElementById("firstToggle");
const cookieSection = document.querySelector(".cookie");

const setCookieView = () => {
	if (cookieToggle.checked) {
		cookieSection.style.display = "block";
	} else {
		cookieSection.style.display = "none";
	}
};

cookieToggle.onclick = () => {
	setCookieView();
};

const policyToggle = document.getElementById("secondToggle");
const policySection = document.querySelector(".policy");

const setPolicyView = () => {
	if (policyToggle.checked) {
		policySection.style.display = "block";
	} else {
		policySection.style.display = "none";
	}
};

policyToggle.onclick = () => {
	setPolicyView();
};

const learnMore = document.getElementById("learnmore");
const moreInfo = document.getElementById("moreinfo");

learnMore.onclick = () => {
	if (moreInfo.style.display !== "none") {
		learnMore.innerHTML = "Learn more";
		moreInfo.style.display = "none";
	} else {
		learnMore.innerHTML = "Hide";
		moreInfo.style.display = "flex";
	}
};

const resetForm = document.getElementById("resetbutton");
const integrationForm = document.getElementById("integration");
const circleStroke = document.querySelector(".circle-chart");
const innerPercentage = document.querySelector("#percentage span");
const innerPercentageColor = document.querySelector("#percentage");
const integrateButton = document.getElementById("integrate");

resetForm.onclick = () => {
	integrationForm.reset();
	setCookieView();
	setPolicyView();
	innerPercentage.innerHTML = 0;
	circleStroke.style.strokeDasharray = "0, 100";
	circleStroke.style.stroke = "#D0784E";
	innerPercentageColor.style.color = "#D0784E";
	integrateButton.disabled = true;
};

const percentage = () => {
	const integrationForm = document.getElementById("integration");

	let inputs = [];

	const formElem = integrationForm.querySelectorAll("input, textarea, select");

	for (let i = formElem.length; i--; ) {
		let found = inputs.indexOf(formElem[i].name);

		if (formElem[i].id !== "firstToggle" && formElem[i].id !== "secondToggle") {
			formElem[i].addEventListener("input", callback);

			if (found === -1) {
				inputs.push(formElem[i].name);
			}
		}
	}

	function callback() {
		let t = [];

		for (let i = inputs.length; i--; ) {
			if (atLeastOne(inputs[i])) t.push(inputs[i]);
		}

		let valid = t.length;
		let total = inputs.length;
		let value = (valid / total) * 100;
		innerPercentage.innerHTML = Math.round(value);
		circleStroke.style.strokeDasharray = value + ", 100";

		if (value === 100) {
			circleStroke.style.stroke = "#1cc691";
			innerPercentageColor.style.color = "#1cc691";
			integrateButton.disabled = false;
		}
	}
};

const atLeastOne = (name) => {
	var input = document.querySelectorAll(`input[name="${name}"]`);

	for (let i = input.length; i--; ) {
		if (input[i].checked) {
			return true;
		}
	}

	return false;
};

percentage();
