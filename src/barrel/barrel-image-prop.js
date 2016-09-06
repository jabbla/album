
import {createAndSet} from '../utils/createAndSet.js'
function imgProp(data,info){
	let img = new Image(),  
		gutter = info._gutter,
		min = info._min,
		max = info._max,
		minH = info._minH,
		maxH = info._maxH,
		renderState = info._renderState,
		parentW = info.$parent._innerW;

	img.src = data.src;

	let $wraper = createAndSet({marginLeft: gutter,marginBottom: gutter},'barrel-img-wraper'),
		title = createAndSet({},'title',data.title),
		desc = createAndSet({},'desc',data.desc);

	//插入标题
	$wraper.appendChild(title);
	$wraper.appendChild(desc);
	
	if(info._classSpace.imgWraper!==''){
		$wraper.classList.add(info._classSpace.imgWraper);	
	}

	info._wrapers.push($wraper);


	img.onload = function(){
		let num = renderState.num,		
			scale = this.width/this.height;

		this.style.height = '100%';

		$wraper.appendChild(this);

		if(num<min && num>0){
			notEnough(scale,$wraper)
		}else if(num===max){
			Enough(scale,$wraper)
		}else if(num<max && num>=min){
			choose(scale,$wraper)
		}else if(num===0){
			newLine(scale,$wraper)
		}
		info.$el.appendChild($wraper);
		
	}
	//情况2
	function notEnough(scale,$wraper){
		//对renderState的添加操作
		renderState.add(scale,$wraper);
		//对当前renderState执行setHeight
		renderState.setHeight();		

	}
	//情况3
	function Enough(scale,wraper){
		//新的一行
		newLine(scale,wraper);
	}
	//情况4
	function choose(scale,wraper){

		let testH = (parentW-parseFloat(gutter)*(renderState.num+1))/(renderState.scale+scale),
			standard = Math.abs(testH-info._avgH)-Math.abs(renderState.height-info._avgH);

		if(standard>0){
			Enough(scale,wraper);
		}else{
			notEnough(scale,wraper);
		}
	}
	//情况5
	function newLine(scale,$wraper){
		//对renderState执行清空操作
		renderState.clean();
		//对renderState执行添加操作
		renderState.add(scale,$wraper);
		//对renderState执行setHeight操作
		renderState.setHeight();			
	}
	
}
export {imgProp};