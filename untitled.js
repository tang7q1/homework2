//********定义区******************
level=1;
monster={
	x:[],
	y:[]

};
hero={
	x:2,
	y:8
};
key1num=0;
key2num=0;
hp=100;
power=12;
protect=3;
money=0;
turnstatus=1;//1下2上3左4右
$(document).ready(function () { 
	drawmap();
	heromove();
});
//**********画地图********************
changelevel();
var drawmap=function(){
	c=document.getElementById("mainmap");
    cxt = c.getContext("2d"); 
	var i,j;
    var floorpic=document.getElementById("floorpic");
	var wallpic=document.getElementById("wallpic");
	var doorclose=document.getElementById("doorclose");
	var dooropen=document.getElementById("dooropen");
	var monster1pic=document.getElementById("monster1pic");
	var key1pic=document.getElementById("key1");
	var key2pic=document.getElementById("key2");
	for(i=0;i<10;i++)
  		for(j=0;j<10;j++){
  			cxt.drawImage(floorpic,i*60,j*60,60,60);
  	}
	
  	for(i=0;i<10;i++)
  		for(j=0;j<10;j++)
  		{
  			if(map[i][j]==1)cxt.drawImage(doorclose, j*60,i*60,60,60);
			if(map[i][j]==88)cxt.drawImage(dooropen, j*60,i*60,60,60);
			if(map[i][j]==3)cxt.drawImage(wallpic, j*60,i*60,60,60);
			if(map[i][j]==11)cxt.drawImage(monster1pic, j*60,i*60,60,60);
			if(map[i][j]==8)cxt.drawImage(key1pic, j*60,i*60,60,60);
			if(map[i][j]==9)cxt.drawImage(key2pic, j*60,i*60,60,60);
	}
}
$(document).keydown(function(event){ 
if(event.keyCode == 37){ event.preventDefault();	goleft();}//左
else if (event.keyCode == 39){ event.preventDefault();	goright();}//右 
else if (event.keyCode == 38){event.preventDefault();	goup();}//上
else if (event.keyCode == 40){event.preventDefault();	godown();}//下
}); 
function opendoor(){
	map[py][px]=0;
	heromove();
	console.log(key1num,key2num);
}
var operation=function(y,x)
{
	if(map[y][x]==0)
	{
		hero.x=x;
		hero.y=y;
		heromove();
	}
	else if(map[y][x]==8||map[y][x]==9)
		{
			hero.x=x;
			hero.y=y;
			pickkey();
		}	
	else if((map[y][x]==1/*&&key1num!=0*/)||(map[y][x]==2&&key2num!=0))
	{
		hero.x=x;
		hero.y=y;
		if(map[hero.y][hero.x]==1)key1num--;
		if(map[hero.y][hero.x]==2)key2num--;		
		py=hero.y;
		px=hero.x;
		map[hero.y][hero.x]=88;
		time=setTimeout("opendoor()",80);
		heromove();
	}
	else if(map[y][x]==13||map[y][x]==14||map[y][x]==15)
	{
		hero.x=x;
		hero.y=y;
		if(map[hero.y][hero.x]==13)
			{if(hp+10<=100)hp+=10;
			else hp=100;
			}
		if(map[hero.y][hero.x]==14)power+=5;
		if(map[hero.y][hero.x]==15)protect+=5;
		map[y][x]==0;
		heromove();
	}
	else if(map[y][x]==11||map[y][x]==12)
	{	
		console.log(hp);
		var mhp;
		if(map[y][x]==11)mhp=20;
		if(map[y][x])==12)mhp=25;
		var attacks;
		if(5+Math.floor(power*0.5)<=20){
		attacks=Math.ceil(mhp/(5+Math.floor(power*0.5)));
		hp=hp-(5-Math.floor(protect*0.5))*attacks;
		}
		else hp=hp-(20-Math.floor(protect*0.5))
		if(hp<=0)
			{
				gameover();
			}
		else 
		{
		hero.x=x;
		hero.y=y;	
		py=y;
		px=x;
		map[hero.y][hero.x]=811;
		time=setTimeout("opendoor()",100);
		heromove();
		console.log(hp);
		}	
	}
}
var goleft=function(){
	turnstatus=3;
	heromove();
	operation(hero.y,hero.x-1);
	
}
var goright=function(){
	turnstatus=4;
	heromove();
	operation(hero.y,hero.x+1);

}
var goup=function(){
	turnstatus=2;
	heromove();
	operation(hero.y-1,hero.x);
}
var godown=function(){
	turnstatus=1;
	heromove();
	operation(hero.y+1,hero.x);
}

var heromove=function(){
	cxt.clearRect(0,0,600,600);
	drawmap();
	var heropic1=document.getElementById("heropic1");
	var heropic2=document.getElementById("heropic2");
	var heropic3=document.getElementById("heropic3");
	var heropic4=document.getElementById("heropic4");
	if(turnstatus==1)cxt.drawImage(heropic1,hero.x*60,hero.y*60,60,60);
	if(turnstatus==2)cxt.drawImage(heropic2,hero.x*60,hero.y*60,60,60);
	if(turnstatus==3)cxt.drawImage(heropic3,hero.x*60,hero.y*60,60,60);
	if(turnstatus==4)cxt.drawImage(heropic4,hero.x*60,hero.y*60,60,60);
	//drawmonsters();
	//drawitems();
} 
var pickkey=function()
{
	if(map[hero.y][hero.x]==8)key1num++;
	if(map[hero.y][hero.x]==9)key2num++;
	map[hero.y][hero.x]=0;
	heromove();
	console.log(key1num,key2num);
}
