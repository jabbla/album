import {Layout} from '../layout.js'

import {createAndSet} from '../utils/createAndSet.js'
import {imgProp} from './waterfall_image_prop.js'

/**
 * 初始化生成列对象数组
 * @param  {number} colNum - 列数
 * @return {Object[]} 所有列对象的数组
 */			
function colMap(colNum){
	let result=  [];
	for(let i=0;i<colNum;i++){
		result.push({cur:0,el:null});
	}
	return result;
}
/** 
 * 瀑布流布局类
 * @extends Layout
 */
class Waterfall extends Layout{
	/**
	 * @param {Object} obj - 配置对象
	 * @param {string} obj.gutter - 图片的间隙大小
	 * @param {number} obj.colNum - 列数
	 */
	constructor(obj){
		super(obj);

		this._colNum = obj.colNum || 4; 
		this._gutter = obj.gutter || '10px';
		

		this._colMap = colMap(this._colNum);
	}
	/** 渲染动作 */
	render(){
		super.render();
		//计算每个wraper的宽度
		let perWidth = (this.$parent._innerW-(this._colNum+1)*parseFloat(this._gutter))/this._colNum;

		//创建列，并插入dom
		for(let item of this._colMap){
			item.el = createAndSet({width:perWidth+'px',marginLeft:this._gutter},'waterfall-col');
			this.$el.appendChild(item.el);
		}
		
		//遍历pics
		this._pics.forEach((item,index)=>{
			imgProp(item,this,perWidth);
		})
		
	}
	/**
	 * 设置图片间隙
	 * @param {String} gutter
	 */
	setGutter(gutter='10px'){

		if(typeof gutter !=='string') throw new TypeError('the setGutter requires a string like 15px');
		else if(!/^\d+px$/.test(gutter)) throw new TypeError('the setGutter requires a string like 15px');

		this._gutter = parseFloat(gutter)<=0? '10px':gutter;  
	}
	/**
	 * 设置布局的列数
	 * @param {Number} colNum
	 */
	setColNum(colNum=4){
		if(typeof colNum !=='number') throw new TypeError('the setColNum() requires a number');
		colNum = colNum<=0? 4:colNum;
		this._colNum = colNum;
		this._colMap = colMap(colNum);

	}
}

export {Waterfall};