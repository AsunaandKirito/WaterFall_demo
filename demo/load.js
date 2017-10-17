
window.onscroll=function(){//鼠标滚动执行
	addImage();	
}

function waterfall(){
	var boxHeight=document.getElementsByClassName("box");
	var browWidth=document.documentElement.clientWidth;//获取浏览器的宽度
		var imageNumber=Math.floor(browWidth/boxHeight[0].offsetWidth);//第一行能放多少图片
		var containerWidth=document.getElementById("container");//获取大盒子的宽度
			containerWidth.style.cssText="width:"+imageNumber*boxHeight[0].offsetWidth+"px;";//大盒子宽度样式等于图片数量和图片宽度乘积
		var tpHeightArr=[];//存放第一行图片高度的数组
		for(var i=0 ;i<boxHeight.length;i++){
				if(i<imageNumber){//判断第一行能放图片基数
					tpHeightArr.push(boxHeight[i].offsetHeight);//把图片高度数值放入数组
				}else{
					var indexNumber=index(tpHeightArr);//调用index函数计算最小图片在数组中的下标
					boxHeight[i].style.position="absolute";//给第一行图片后面的下一张图片添加样式position
					boxHeight[i].style.top=tpHeightArr[indexNumber]+"px";//第一行后面图片距离顶部的距离就是第一行最矮图片的高度
					boxHeight[i].style.left=boxHeight[indexNumber].offsetLeft+"px";//第一行后面图片距离左边的距离就是最矮那张距离左边的距离
					tpHeightArr[indexNumber]=tpHeightArr[indexNumber]+boxHeight[i].offsetHeight;//更新最矮那张图片的高度
				}
		}
}
function index(tpHeightArr){//传入第一行图片高度计算最矮的图片
	var xiabiao;//定义变量装下标
		var min=tpHeightArr[0];
		for(var i=0;i<tpHeightArr.length;i++){
			if(min>=tpHeightArr[i]){
				min=tpHeightArr[i];
				xiabiao=i;
			}
		}
	return xiabiao;//把下标return出去
}	
function addImage(){//添加图片的代码
		var data=["images/1.jpg",];
		for(var i=0;i<data.length;i++){
			var con= document.getElementById("container");//获取最外面的盒子
			var div1=document.createElement("div");//创建一个div盒子
			div1.className="box";//盒子下面创建一个类名box
			con.appendChild(div1);//这个盒子定义为最外面盒子的子类-------下面同理
			var div2= document.createElement("div");
			div2.className="box_img";
			div1.appendChild(div2);
			var aa=document.createElement("a");
			aa.href=data[0];
			div2.appendChild(aa);
			var imgsrc=document.createElement("img");
			imgsrc.src=data[0];
			aa.appendChild(imgsrc);
		}
		waterfall();//跟在开始创建的页面后面
}
function lazyadd(){//判断鼠标滚动的时候进行加载图片的函数,也就是懒加载函数
	var tpArr=[];//定义一个数组存放一开始加载的图片
	var img=document.getElementsByClassName("box");
	for(var i=0;i<img.length;i++){
		tpArr.push(img[i]);//全部加入数组中
	}
	var lastimageHeight=tpArr[img.length-1].offsetTop;//获取刚开始加载的图片中最后一张图片距离浏览器顶部的高度
	var mousemoveEvent=document.documentElement.scrollTop||document.body.scrollTop;//获取鼠标滚动的距离 document.body.scrollTop这个是浏览器兼容性
	var browHeight=document.documentElement.clientHeight||document.body.clientHeight;//获取浏览器当前高度 document.body.clientHeight也是兼容
	if(lastimageHeight<(mousemoveEvent+browHeight)){//判断最后一张图片距离顶部的距离和鼠标滚动加上当前浏览器高度的和，小于就执行添加图片的函数
		addImage();//也就是鼠标滚动就添加图片
	}
}

