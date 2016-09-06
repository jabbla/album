import $$ from './utils/NodeList.js';
import {widthAndHeight} from './utils/widthAndHeight.js'
import {getComputedStyle} from './utils/getComputedStyle.js'

/** 基础布局类 */
class Layout {
	/**
	 * @param  {Object}	obj 配置对象
	 * @param {String} obj.el 布局的挂载元素
	 * @param {Array} obj.pictures 图片元数据数组 
	 */
	constructor(obj){
		if(!obj || !obj.el) throw new Error('The layout needs a el');
		if(obj.pictures && !(obj.pictures instanceof Array)) throw new Error('the configuration is wrong');

		//设置默认挂载元素为body
		this.$parent = $$(obj.el);
		this.$parent = this.$parent[0] || this.$parent;
		
		let {width,height,overflow} = widthAndHeight(this.$parent);


		this.$parent._innerW = width;
		this.$parent._innerH = height;

		//创建最外层div
		this.$el = document.createElement('div');
		//图片数组
		this._pics = obj.pictures || [];
		//image-wraper数组
		this._wrapers = [];
		//自定义类空间
		this._classSpace = {imgWraper:''};
		
	}
	/** 基础的渲染动作 */
	render(){
		if(!this._pics.length) throw new Error('you have no pictrue please use add() before render()');

		this.$parent.appendChild(this.$el);
	}
	/**
	 * 添加元信息
	 * @param {Array} arr - 元数据数组
	 */
	add(arr){

		if(!(arr instanceof Array)) throw new TypeError('the add() method only accepts Array');
		this._pics = this._pics.concat(arr);
	}
	/**
	 * 返回当前布局的所有image-wraper
	 * @return {Array} 
	 */
	getWrapers(){
		return this._wrapers;
	}
	/**
	 * 追加自定义前缀
	 * @param  {Object} obj 自定义类名
	 * @param {String} obj.imgWraper 图片包裹层类名	
	 * @return {Object} 类空间
	 */
	classSpace(obj={imgWraper:''}){
		this._classSpace = obj;
		return this._classSpace
	}

}

export {Layout}