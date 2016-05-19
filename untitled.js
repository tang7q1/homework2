//********定义区******************


level=0;
monster={
	x:[],
	y:[]

};
hero={
	x:1,
	y:1
};
keynumber={};
hp=100;
power=0;
protect=0;
map = [[1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1],[],[],[],[]];
$(document).ready(function () { 
	var testt=map[level];
	for(var i=0;i<5;i++)
  		for(var j=0;j<5;j++)
		
	console.log(testt[i*5+j]);
drawmap();
});
//**********画地图********************
/*var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";*/

var drawmap=function(){
	 c=document.getElementById("mainmap");
    cxt =c.getContext("2d"); 
	var i,j;
	var mmap=map[level];
	var wallpic=document.getElementById("wallpic");
  	for(i=0;i<5;i++)
  		for(j=0;j<5;j++)
  		{
  			console.log(mmap[i*5+j]);
  			if(mmap[i*5+j]==1)cxt.drawImage(wallpic, i*60,j*60,60,60);
  		}

}
$(document).keydown(function(event){ 
if(event.keyCode == 37){     goleft();    }//左
else if (event.keyCode == 39){ goright(); }//右 
else if (event.keyCode == 38){ goup();      } //上
else if (event.keyCode == 40){ godown();    } //下
}); 
var goright=function(){
	var mmap=map[level];
	if(mmap[hero.y*5+hero.x+1]==0)
		{
			hero.x++;
			heromove();
		}

	}
var godown=function(){
	var mmap=map[level];
	if(mmap[(hero.y+1)*5+hero.x]==0)
		{
			hero.y++;
			heromove();
		}
	}
var goup=function(){
	var mmap=map[level];
	if(mmap[(hero.y-1)*5+hero.x]==0)
		{
			hero.y--;
			heromove();
		}
	}
var goleft=function(){
	var mmap=map[level];
	if(mmap[hero.y*5+hero.x-1]==0)
		{
			hero.x--;
			heromove();
		}
	}
var heromove=function(){
	cxt.clearRect(0,0,600,600);
	 var heropic=new Image();
	heropic.src="heropic.png"
	drawmap(level);
	//drawmosters();
	//drawitems();
	cxt.drawImage(heropic,hero.x*60,hero.y*60,60,60);

}
