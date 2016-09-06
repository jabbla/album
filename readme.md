# Album

>多功能相册javascript插件，一般是根据个人的需求持续修改功能，可能有些地方不尽如人意，还望各位大大多提issue

## 基本使用
在页面文件中引用
``/dist/js/album.js``
``/dist/css/main.css``

### 创建插件实例
```js
var album = new MutiAlbum();
```
### 创建布局

> 对于config对象，下面有详细介绍

```js
//创建拼图布局
var puzzle = album.Puzzle(config)
//创建瀑布布局
var waterfall = album.Waterfall(config)
//创建木桶布局
var barrel = album.Barrel(config)
```
## config对象

```js
//config对象
{   
    /*通用配置项*/
        el: 'el',    //挂载元素
        /*图片元数据数组*/
        pictures:[
            {
                title: 'title', //图片标题
                desc: 'desc',   //图片描述
                src: 'http://blog.zxrcool.com/1.jpg'//图片地址
            }
            
        ]，
        gutter: '10px'      //图片间距(默认10px)
    
    /*瀑布布局配置项*/
        colNum: 4   //列数为4(默认)
    
    /*木桶布局配置项*/
        avgH: 100   //基准高度100px(单位为px)
        min: 3      //一行最少图片数(默认为3)
        max: 5      //一行最多图片数(默认为5)
        
}
```
### 添加图片

> picArray结构与config对象中pictures一致

```js
puzzle.add(picArray)        
waterfall.add(picArray)
barrel.add(picArray)
```
### 渲染布局

```js
puzzle.render()
waterfall.render()
barrel.render()
```
## 杂项
###  获取当前布局所有图片的包裹元素

> 返回元素数组

```js
puzzle.getWrapers()
waterfall.getWrapers()
barrel.getWrapers()
```
### 命名类空间

> 自定义类空间,根据自定义类重写样式

```js
puzzle.classSpace(obj)
waterfall.classSpace(obj)
barrel.classSpace(obj)

//obj格式
{
    imgWraper:'my-wraper',
}
```

