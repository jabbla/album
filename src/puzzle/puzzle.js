import {Layout} from '../layout.js'
import {imgProp} from './puzzle_image_prop.js'
import {createAndSet} from '../utils/createAndSet.js'

/**
 * 拼图布局类
 * @extends Layout
 */
class Puzzle extends Layout{
	/**
	 * @param  {Object}	obj - 配置对象
	 */
	constructor(obj){
		super(obj);
		//创建方法索引
		this._method = {
			1: this._one,
			2: this._two,
			3: this._three,
			4: this._four,
			5: this._five,
			6: this._six,
		}  

		this.$el.style.height = '100%';
	}
	/** 渲染动作 */
	render(){
		super.render();
		this._method[this._pics.length<=6? this._pics.length : 6].call(this);

	}
	/** 1张图片布局 */
	_one(){
		//创建image-wraper,并设置宽高，及class
		let wraper = createAndSet({height:'100%'});
		imgProp.call(this,wraper,'./imgs/srcP.jpg',this._pics[0]);

		this.$el.appendChild(wraper);
		this._wrapers.push(wraper);
	}
	/** 2张图片布局 */
	_two(){
		let wraper_left = createAndSet({width:'50%',height:'100%',display:'inline-block'}),
			wraper_right = createAndSet({width: '50%',height:'100%',display:'inline-block'});

			imgProp.call(this,wraper_left,'./imgs/srcP.jpg',this._pics[0]);
			imgProp.call(this,wraper_right,'./imgs/srcP.jpg',this._pics[1]);

		this.$el.appendChild(wraper_left);
		this.$el.appendChild(wraper_right);

		this._wrapers.push(wraper_left);
		this._wrapers.push(wraper_right);

	}
	/** 3张图片布局 */
	_three(){
		let width = this.$parent._innerW,
			height = this.$parent._innerH;

		let wraper_left = createAndSet({width: width-height/2+'px',height: '100%',display: 'inline-block'}),
			wraper_right = createAndSet({width: height/2+'px',height: '100%',display: 'inline-block'}),
			wraper_right_top = createAndSet({width: height/2+'px',height: height/2+'px'}),
			wraper_right_bottom = createAndSet({width: height/2+'px',height: height/2+'px'});

			imgProp.call(this,wraper_left,'./imgs/srcP.jpg',this._pics[0]);
			imgProp.call(this,wraper_right_top,'./imgs/srcP.jpg',this._pics[1]);
			imgProp.call(this,wraper_right_bottom,'./imgs/srcP.jpg',this._pics[2]);

			this._wrapers.push(wraper_left);
			this._wrapers.push(wraper_right_top);
			this._wrapers.push(wraper_right_bottom);

		wraper_right.appendChild(wraper_right_top);
		wraper_right.appendChild(wraper_right_bottom);
		this.$el.appendChild(wraper_left);
		this.$el.appendChild(wraper_right);



	}
	/** 4张图片布局 */
	_four(){
		
		let width = this.$parent._innerW,
			height = this.$parent._innerH;

		let wraper_left = createAndSet({width: width/2+'px',height:'100%',display:'inline-block'}),
			wraper_right = createAndSet({width: width/2+'px',height:'100%',display:'inline-block'}),
			wraper_left_top = createAndSet({width: '100%',height: height/2+'px'}),
			wraper_left_bottom = createAndSet({width: '100%',height: height/2+'px'}),
			wraper_right_top = createAndSet({width: '100%',height: height/2+'px'}),
			wraper_right_bottom = createAndSet({width: '100%',height: height/2+'px'});

			imgProp.call(this,wraper_left_top,'./imgs/srcP.jpg',this._pics[0]);
			imgProp.call(this,wraper_left_bottom,'./imgs/srcP.jpg',this._pics[1]);
			imgProp.call(this,wraper_right_top,'./imgs/srcP.jpg',this._pics[2]);
			imgProp.call(this,wraper_right_bottom,'./imgs/srcP.jpg',this._pics[3]);

			this._wrapers.push(wraper_left_top);
			this._wrapers.push(wraper_left_bottom);
			this._wrapers.push(wraper_right_top);
			this._wrapers.push(wraper_right_bottom);


			wraper_left.appendChild(wraper_left_top);
			wraper_left.appendChild(wraper_left_bottom);
			wraper_right.appendChild(wraper_right_top);
			wraper_right.appendChild(wraper_right_bottom);

			this.$el.appendChild(wraper_left);
			this.$el.appendChild(wraper_right);
 
	}
	/** 5张图片布局 */
	_five(){
		let width = this.$parent._innerW,
			height = this.$parent._innerH;

		let wraper_left = createAndSet({width: width-height/2+'px',height:'100%',display:'inline-block'}),
			wraper_right = createAndSet({width: height/2+'px',height:'100%',display:'inline-block'}),
			wraper_left_top = createAndSet({width:'100%',height: '50%'}),
			wraper_left_bottom = createAndSet({width: '100%',height:'50%'}),
			wraper_left_bottom_left = createAndSet({width:'50%',height:'100%',display: 'inline-block'}),
			wraper_left_bottom_right = createAndSet({width:'50%',height:'100%',display: 'inline-block'}),
			wraper_right_top = createAndSet({width: '100%',height:'50%'}),
			wraper_right_bottom = createAndSet({width: '100%',height:'50%'});

			imgProp.call(this,wraper_left_top,'./imgs/srcP.jpg',this._pics[0]);
			imgProp.call(this,wraper_left_bottom_left,'./imgs/srcP.jpg',this._pics[1]);
			imgProp.call(this,wraper_left_bottom_right,'./imgs/srcP.jpg',this._pics[2]);
			imgProp.call(this,wraper_right_top,'./imgs/srcP.jpg',this._pics[3]);
			imgProp.call(this,wraper_right_bottom,'./imgs/srcP.jpg',this._pics[4]);

			this._wrapers.push(wraper_left_top);
			this._wrapers.push(wraper_left_bottom_left);
			this._wrapers.push(wraper_left_bottom_right);
			this._wrapers.push(wraper_right_top);
			this._wrapers.push(wraper_right_bottom);

			wraper_left.appendChild(wraper_left_top);
			wraper_left_bottom.appendChild(wraper_left_bottom_left);
			wraper_left_bottom.appendChild(wraper_left_bottom_right);
			wraper_left.appendChild(wraper_left_bottom);

			wraper_right.appendChild(wraper_right_top);
			wraper_right.appendChild(wraper_right_bottom);

			this.$el.appendChild(wraper_left);
			this.$el.appendChild(wraper_right);
	}
	/** 6张图片布局 */
	_six(){
		let width = this.$parent._innerW,
			height = this.$parent._innerH;


		let wraper_left = createAndSet({width: '66.666666%',height:'100%',display:'inline-block'}),
			wraper_right = createAndSet({width: '33.333333%',height:'100%',display: 'inline-block'}),
			wraper_left_top = createAndSet({width:'100%',height:'66.666666%'}),
			wraper_left_bottom = createAndSet({width: '100%',height:'33.333333%'}),
			wraper_left_bottom_left = createAndSet({width:'50%',height:'100%',display:'inline-block'}),
			wraper_left_bottom_right = createAndSet({width:'50%',height:'100%',display:'inline-block'}),
			wraper_right_top = createAndSet({width:'100%',height:'33.333333%'}),
			wraper_right_middle = createAndSet({width:'100%',height:'33.333333%'}),
			wraper_right_bottom = createAndSet({width:'100%',height:'33.333333%'});


			imgProp.call(this,wraper_left_top,'./imgs/srcP.jpg',this._pics[0]);
			imgProp.call(this,wraper_left_bottom_left,'./imgs/srcP.jpg',this._pics[1]);
			imgProp.call(this,wraper_left_bottom_right,'./imgs/srcP.jpg',this._pics[2]);
			imgProp.call(this,wraper_right_top,'./imgs/srcP.jpg',this._pics[3]);
			imgProp.call(this,wraper_right_middle,'./imgs/srcP.jpg',this._pics[4]);
			imgProp.call(this,wraper_right_bottom,'./imgs/srcP.jpg',this._pics[5]);

			this._wrapers.push(wraper_left_top);
			this._wrapers.push(wraper_left_bottom_left);
			this._wrapers.push(wraper_left_bottom_right);
			this._wrapers.push(wraper_right_top);
			this._wrapers.push(wraper_right_middle);
			this._wrapers.push(wraper_right_bottom);

			wraper_left.appendChild(wraper_left_top);
			wraper_left.appendChild(wraper_left_bottom);
			wraper_left_bottom.appendChild(wraper_left_bottom_left);
			wraper_left_bottom.appendChild(wraper_left_bottom_right);

			wraper_right.appendChild(wraper_right_top);
			wraper_right.appendChild(wraper_right_middle);
			wraper_right.appendChild(wraper_right_bottom);

			this.$el.appendChild(wraper_left);
			this.$el.appendChild(wraper_right);

	}
}

export {Puzzle};