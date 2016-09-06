//寻找最短的一列
function findShortest(map){
	let result = map[0];
	map.forEach((item,index)=>{
		result = result.cur>item.cur? item : result; 
	})
	return result;
}

export {findShortest};