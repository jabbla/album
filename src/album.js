import {Puzzle} from './puzzle/puzzle.js'
import {Waterfall} from './waterfall/waterfall.js'
import {Barrel} from './barrel/barrel.js'

/**
 * MultiAlbum类
 */
class MultiAlbum {
	constructor(){

	}
	/**
	 * 获取Puzzle实例
	 * @param {Object} obj 配置对象
	 */
	Puzzle(obj){
		return new Puzzle(obj)
	}
	/**
	 * 获取Waterfall实例
	 * @param {Object} obj 配置对象
	 */
	Waterfall(obj){
		return new Waterfall(obj)	
	}
	/**
	 * 获取Barrel实例
	 * @param {Object} obj 配置对象
	 */
	Barrel(obj){
		return new Barrel(obj)
	}
}
 
window.MultiAlbum = MultiAlbum;

