var test = new MultiAlbum();

var puzzle = test.Barrel({el:'.one',pictures:[
	{
		title: 'title',
		desc: '这是一个图片描述',
		src: './imgs/1.jpg',
	},
	{
		title: 'title',
		desc: '这是一个图片描述',
		src: './imgs/2.jpg',
	},
	{
		title: 'title',
		desc: '这是一个图片描述',
		src: './imgs/3.jpg',
	},
	{
		title: 'title',
		desc: '这是一个图片描述',
		src: './imgs/4.jpg',
	},
	{
		title: 'title',
		desc: '这是一个图片描述',
		src: './imgs/5.jpg',
	},
	{
		title: 'title',
		desc: '这是一个图片描述',
		src: './imgs/6.jpg',
	},
	{
		title: 'title',
		desc: '这是一个图片描述',
		src: './imgs/7.jpg',
	},
]});

puzzle.classSpace({imgWraper: '000sa'});
puzzle.render();
