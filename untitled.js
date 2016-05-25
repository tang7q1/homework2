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
hp2=100;
var hp3;
power=0;
protect=0;
money=0;


//**********画地图********************
changelevel();
var drawmap=function(){
	c=document.getElementById("mainmap");
    cxt = c.getContext("2d"); 
	var i,j;
	var floorpic=document.getElementById("floorpic");
	var wallpic=document.getElementById("wallpic");
	var door1=document.getElementById("door1");
	var door2=document.getElementById("door2");
	var dooropen=document.getElementById("dooropen");
	var monster1pic=document.getElementById("monster1pic");
	var key1pic=document.getElementById("key1");
	var key2pic=document.getElementById("key2");
	var flag=document.getElementById("flag");
	var tomb=document.getElementById("tomb");
	for(i=0;i<10;i++)
  		for(j=0;j<10;j++){
  			cxt.drawImage(floorpic,i*60,j*60,60,60);
  	}
	
  	for(i=0;i<10;i++)
  		for(j=0;j<10;j++)
  		{
  			if(map[i][j]==1)cxt.drawImage(door1, j*60,i*60,60,60);
			if(map[i][j]==2)cxt.drawImage(door2, j*60,i*60,60,60);
			if(map[i][j]==3)cxt.drawImage(wallpic, j*60,i*60,60,60);
			if(map[i][j]==11)cxt.drawImage(monster1pic, j*60,i*60,60,60);
			if(map[i][j]==8)cxt.drawImage(key1pic, j*60,i*60,60,60);
			if(map[i][j]==9)cxt.drawImage(key2pic, j*60,i*60,60,60);
			if(map[i][j]==10)cxt.drawImage(flag, j*60,i*60,60,60);
			if(map[i][j]==13)cxt.drawImage(tomb, j*60,i*60,60,60);
			if(map[i][j]==15)cxt.drawImage(dooropen, j*60,i*60,60,60);

	}
}
$(document).keydown(function(event){ 
if(event.keyCode == 37){event.preventDefault();	goleft();}//左
else if (event.keyCode == 39){event.preventDefault();	goright();}//右 
else if (event.keyCode == 38){event.preventDefault();	goup();}//上
else if (event.keyCode == 40){event.preventDefault();	godown();}//下
}); 

function changekey(){
	document.getElementById("keybg1").innerHTML=key1num;
	document.getElementById("keybg2").innerHTML=key2num;
}

function changehp(){
	document.getElementById("hp").innerHTML="生命值~~~~ "+hp;
	document.getElementById("hp2").innerHTML="生命值~~~~ "+hp2;
	document.getElementById("hp3").innerHTML="敌人生命值~~~ "+hp3;
}

function changepower(){
	document.getElementById("power").innerHTML="能力值~~~~ "+power;
	document.getElementById("power2").innerHTML="能力值~~~~ "+power2;
}

function changeprotect(){
	document.getElementById("protect").innerHTML="防御力~~~~ "+protect;
	document.getElementById("protect2").innerHTML="防御力~~~~ "+protect2;
}

function changemoney(){
	document.getElementById("money").innerHTML="财富值~~~~ "+money;
	document.getElementById("money2").innerHTML="财富值~~~~ "+money2;
}

var pickkey=function()
{
	if(map[hero.y][hero.x]==8)key1num++;
	else if(map[hero.y][hero.x]==9)key2num++;
	map[hero.y][hero.x]=0;
	changekey();
	heromove();
}

function opendoor(){
	map[py][px]=0;
	changekey();
	heromove();
}

function gameover(){
	


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
	else if((map[y][x]==1&&key1num!=0)||(map[y][x]==2&&key2num!=0))
	{
		if(map[y][x]==1)key1num--;
		if(map[y][x]==2)key2num--;		
		py=y;
		px=x;
		map[y][x]=15;
		heromove();
		time=setTimeout("opendoor()",100);
	}
	else if(map[y][x]==11||map[y][x]==12)
	{
		var mhp;
		if(map[y][x]==11)mph=20;
		else if(map[y][x]==12)mph=25;
		var attacks;
		if(5+Math.floor(power*0.5)<=20)
		{
			attacks=Math.ceil(mph/(5+Math.floor(power*0.5)));
			hp -= 5-Math.floor(protect*0.5)*attacks;
		}
		else
			hp -= 20-Math.floor(protect*0.5);
			
		changehp();	
		if(hp<=0)
		{
			gameover();
		}
		else
		{
			py=y;
			px=x;
			map[y][x]=13;//dead monster
			heromove();
			time=setTimeout("opendoor();heromove()",800);
		}
	}
	else if(map[y][x]==10)
	{
		//level++;
		hero.x=x;
		hero.y=y;
		heromove();
		//document.getElementById("showlevel").innerHTML="第 "+level+" 关";
		//changelevel();
		showbox();
	}
}
var showbox=function(){
	document.getElementById("nextlevel").style.visibility="visible";
}
var levelnext=function()
{
	level++;
	document.getElementById("showlevel").innerHTML="第 "+level+" 关";
	document.getElementById("nextlevel").style.visibility="hidden";
	changelevel();
	heromove();
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
} 
$(document).ready(function () { 
	drawmap();
	heromove();
});