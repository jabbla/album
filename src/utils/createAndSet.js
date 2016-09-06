/**
 * 创建新的DIV，设置相应属性，添加class
 * @param  {Object} obj 样式设置对象
 * @param  {String} cla className
 * @return {HTMLElement}     
 */
function createAndSet(obj,cla='img_wraper',data=''){
	let image_wraper = document.createElement('div');


	image_wraper.classList.add(cla);
	image_wraper.innerHTML = data;

	if(obj){
		for(let str in obj){
			image_wraper.style[str] = obj[str]
		}	
	}
	
	
	return image_wraper;
}

export {createAndSet};