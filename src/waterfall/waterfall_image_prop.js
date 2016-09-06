import {findShortest} from '../utils/findShortest.js'
import {createAndSet} from '../utils/createAndSet.js'
function imgProp(data,info,perW){
	let img = new Image();

		img.src = data.src;

		img.style.width = '100%';
		//创建wraper,标题,描述
		let $wraper = createAndSet({width:perW+'px',marginBottom: info._gutter},'waterfall-img-wraper'),
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
			//寻找最短的一列
			let result = findShortest(info._colMap);
			
			$wraper.appendChild(this);

			result.el.appendChild($wraper);
			result.cur = result.el.offsetHeight;
		}	
		return img;
}

export {imgProp}