//左侧导航
var navfloat = $(".navfloat");
var num = $(".nav .navleft ul li").length;
var oleftli = $(".nav .navleft ul li");//显示区块
var ofloatli = $(".nav .navfloat ul li");//隐藏区块
bannerplay(navfloat,ofloatli,oleftli,15,false,1);
//中间轮播图
var banner = $(".banner");
var picli = $(".banner .bpicture ul li");
var lilen = picli.length;
var leftbtn = $(".banner .left");
var rightbtn = $(".banner .right");
for(var i=1;i<=lilen;i++){	//创建图片个数相对应的底部数字个数
	var li="<li>"+i+"</li>";	//创建li标签，并插入到页面中
	$(".banner .num_btn ul").append(li);
}	
var numli = $(".banner .num_btn ul li")
bannerplay(banner,picli,numli,8,true,0,leftbtn,rightbtn);
//右侧选项卡