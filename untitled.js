//********定义区******************

$(document).ready(function () { 
var level=0;
var monster={
	x:[],
	y:[]

};
var hero={
	pic:null,
	x:1,
	y:1
};
var keynumber={};
var hp=100;
var power=0;
var protect=0;
var App = {
    c : null,
    cxt : null
};
var map = [[1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1],[],[],[],[]];
	App.c=document.getElementById("mainmap");
	App.cxt =App.c.getContext("2d"); 
	drawmap();
	var testt=map[level];
	for(var i=0;i<5;i++)
  		for(var j=0;j<5;j++)
		
	console.log(testt[i*5+j]);});
//**********画地图********************
/*var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";*/

var drawmap=function(level){
	var i,j;
	var mmap=map[level];
	var wallpic=document.getElementById("wallpic");
  	for(i=0;i<5;i++)
  		for(j=0;j<5;j++)
  		{
  			if(mmap[i*5+j]==1)App.cxt.drawImage(wallpic, i*60,j*60,60,60);
  		}

}
$(document).keydown(function(event){ 
if(event.keyCode == 37){     goleft();    }//左
else if (event.keyCode == 39){ goright(); }//右 
else if (event.keyCode == 38){ goup;      } //上
else if (event.keyCode == 40){ godown;    } //下
}); 
var goright=function(){
	var mmap=map[level];
	if(mmap[hero.x+1][hero.y]==0)
		{
			hero.x++;
			heromove();
		}

	}
var godown=function(){
	var mmap=map[level];
	if(mmap[hero.x][hero.y+1]==0)
		{
			hero.y++;
			heromove();
		}
	}
var goup=function(){
	var mmap=map[level];
	if(mmap[hero.x][hero.y-1]==0)
		{
			hero.y--;
			heromove();
		}
	}
var goleft=function(){
	var mmap=map[level];
	if(mmap[hero.x-1][hero.y]==0)
		{
			hero.x--;
			heromove();
		}
	}
var heromove=function(){
	App.cxt.clearRect(0,0,600,600);
	hero.pic=getElementById("heropic");
	drawmap(level);
	//drawmosters();
	//drawitems();
	App.cxt.drawImage(heropic,hero.x*60,hero.y*60,60,60);

}
