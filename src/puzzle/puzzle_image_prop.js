import {createAndSet} from '../utils/createAndSet.js'

function imgProp($wraper,srcP,data){
	let img = new Image();

	img.src = data.src;
	
	$wraper.style.backgroundImage = 'url('+srcP+')';
	$wraper.classList.add('puzzle-img-wraper');

	//创建标题,描述
	let title = createAndSet({},'title',data.title),
		desc = createAndSet({},'desc',data.desc);
	//插入标题
	$wraper.appendChild(title);
	$wraper.appendChild(desc);

	if(this._classSpace.imgWraper!==''){
			$wraper.classList.add(this._classSpace.imgWraper);	
	}

	img.onload = function(){
		$wraper.style.backgroundImage = 'url('+data.src+')';
	}
	
}
export {imgProp};