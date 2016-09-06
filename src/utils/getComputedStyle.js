function getComputedStyle(ele){
	let computedStyle = document.defaultView.getComputedStyle(ele, null);

	return computedStyle;
}

export {getComputedStyle};