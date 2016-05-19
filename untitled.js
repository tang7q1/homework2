//********定义区******************


level=0;
monster={
	x:[],
	y:[]

};
hero={
	x:2,
	y:7
};
keynumber={};
hp=100;
power=0;
protect=0;
//map = [[1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1],[],[],[],[]];
$(document).ready(function () { 
	var testt=map;
	for(var i=0;i<10;i++)
  		for(var j=0;j<10;j++)
		
	console.log(testt[i][j]);
drawmap();
heromove();
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
    	var floorpic=document.getElementById("floorpic");
		var wallpic=document.getElementById("wallpic");
		var door=document.getElementById("door");
	for(i=0;i<10;i++)
  		for(j=0;j<10;j++){
  			cxt.drawImage(floorpic,i*60,j*60,60,60);
  		}
	
  	for(i=0;i<10;i++)
  		for(j=0;j<10;j++)
  		{
  			//console.log(map[i][j]);
  			if(map[i][j]==1)cxt.drawImage(wallpic, j*60,i*60,60,60);
			if(map[i][j]==2)cxt.drawImage(door, j*60,i*60,60,60);
			
  		}     
	//var mmap=map[level];
	
  

}
$(document).keydown(function(event){ 
if(event.keyCode == 37){     goleft();    }//左
else if (event.keyCode == 39){ goright(); }//右 
else if (event.keyCode == 38){ goup();      } //上
else if (event.keyCode == 40){ godown();    } //下
}); 
var goright=function(){
	if(map[hero.y][hero.x+1]==0)
		{
			hero.x++;
			heromove();
		}

	}
var godown=function(){
	if(map[hero.y+1][hero.x]==0)
		{
			hero.y++;
			heromove();
		}
	}
var goup=function(){
	if(map[hero.y-1][hero.x]==0)
		{
			hero.y--;
			heromove();
		}
	}
var goleft=function(){
	if(map[hero.y][hero.x-1]==0)
		{
			hero.x--;
			heromove();
		}
	}
var heromove=function(){
	cxt.clearRect(0,0,600,600);
	drawmap();
	 var heropic=document.getElementById("heropic");
	
	//drawmonsters();
	//drawitems();
	cxt.drawImage(heropic,hero.x*60,hero.y*60,60,60);

} 
var drawmonsters=function()
{
	var i,j;
	var mmap=map[level];
	var monsterpic=new Image();
	monsterpic.src="monsterpic.png";
  	for(i=0;i<10;i++)
  		for(j=0;j<10;j++)
  		{
  
  			if(mmap[i*5+j]==7)cxt.drawImage(monsterpic, i*60,j*60,60,60);
  		}

}
var drawitems=function()
{
	var i,j;
	var mmap=map[level];
	
}
