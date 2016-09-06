//获取元素除边框以外的高度和宽度
function widthAndHeight(ele){
	let computedStyle = document.defaultView.getComputedStyle(ele, null),
		left = computedStyle.borderLeftWidth,
		right = computedStyle.borderRightWidth,
		top = computedStyle.borderTopWidth,
		bottom = computedStyle.borderBottomWidth,
		width = computedStyle.width,
		height = computedStyle.height,
		overflow = computedStyle.overflow;

	let surfixH = computedStyle.boxSizing==='border-box'? parseFloat(left)+parseFloat(right):0,
		surfixV = computedStyle.boxSizing==='border-box'? parseFloat(top)+parseFloat(bottom):0;
		
	return {
		width:  parseFloat(width)-surfixH,
		height: parseFloat(height)-surfixV,
		overflow: overflow,
	}
	
}

export {widthAndHeight};