import {Layout} from '../layout.js'
import {imgProp} from './barrel-image-prop.js'


/**
 * 木桶布局类
 * @extends Layout
 */
class Barrel extends Layout{
	/**
	 * @param  {Object}	obj - 配置对象
	 * @param {Number} obj.min 一行中最少图片数
	 * @param {Number} obj.max 一行中最多图片数
	 * @param {String} obj.avgH 每一行理想的高度
	 * @param {String} obj.gutter 图片之间的间隙距离
	 */
	constructor(obj){
		super(obj);
		this._gutter = obj.gutter || '10px';
		this._min = obj.min || 3;
		this._max = obj.max || 5;
		this._avgH = obj.avgH || 100;
		
		this.$parent._innerW-=30;

		let self = this;

		this._renderState = {
			num: 0,
			scale: 0,
			height: 0,
			stack: [],
			setHeight(){
				for(let item of this.stack){
					item.style.height = this.height+'px';
				}
			},
			clean(){
				this.num = 0;
				this.scale = 0;
				this.height = 0;
				this.stack = [];
			},
			add(scale,$wraper){
				this.num++;
				this.scale+=scale;
				this.height = (self.$parent._innerW-parseFloat(self._gutter)*(this.num+1))/this.scale;
				this.stack.push($wraper);


			}
		}
		this.$el.className = 'barrel';
	}
	/** 渲染动作 */
	render(){
		super.render();
		//每个图片具体的动作
		this._pics.forEach((item,index)=>{
			imgProp(item,this);
		})
	}
	/**
	 * 设置图片间隙
	 * @param {String} gutter 图片之间的间隙大小
	 */
	setGutter(gutter="10px"){
		if(typeof gutter !=='string') throw new TypeError('the setGutter requires a string like 15px');
		else if(!/^\d+px$/.test(gutter)) throw new TypeError('the setGutter requires a string like 15px');

		this._gutter = parseFloat(gutter)<=0? '10px':gutter;

	}
	/**
	 * 设置一行图片的数量范围
	 * @param {Number} min 一行最少图片数 
	 * @param {Number} max 一行最多图片数
	 */
	setColNums(min=3,max=5){
		if(typeof min !=='number' || typeof max !=='number') throw new TypeError('the setColNums() arguments must be number');
		if(min>max) throw new Error('please check out your min and max . min less than max');
		this._min = min;
		this._max = max;
	}
}

export {Barrel};