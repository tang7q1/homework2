var map=new Array();
function changelevel(){
	if(level==1)
	{
		for(i=0;i<10;++i)
		{
			map[i]=new Array();
			for(j=0;j<10;++j)
			{
				map[i][j]=0;
			}
		}//chushihua
		for(j=0;j<10;++j)
		{
			map[0][j]=3;
			map[9][j]=3;
		}

		for(i=0;i<10;++i)
		{
			map[i][0]=3;
			map[i][9]=3;
		}
		map[2][1]=map[2][3]=map[2][4]=map[2][5]=map[2][6]=map[3][6]=map[3][7]=map[4][1]=map[4][2]=map[4][4]=map[4][5]=map[4][6]
		=map[5][6]=map[6][1]=map[6][2]=map[6][3]=map[6][4]=map[6][6]=map[6][8]=map[8][4]=map[8][6]=3;//wall

		map[3][8]=map[4][3]=map[7][4]=map[7][6]=1;//door1
		map[2][2]=map[6][7]=2;//door2
		
		map[2][8]=map[3][2]=map[7][8]=map[8][7]=11;//monster
		
		map[3][1]=17;//sword
		
		map[1][5]=16;//+hp
		
		map[7][1]=map[5][2]=map[3][5]=map[5][8]=8;//key1
		map[1][8]=map[8][8]=9;//key2
		
		map[1][1]=map[7][2]=10;
	}
	else if(level==2)
	{
		for(i=0;i<10;++i)
		{
			map[i]=new Array();
			for(j=0;j<10;++j)
			{
				map[i][j]=0;
			}
		}//chushihua
		hero.x=8;
		hero.y=8;
		for(j=0;j<10;++j)
		{
			map[0][j]=3;
			map[9][j]=3;
		}

		for(i=0;i<10;++i)
		{
			map[i][0]=3;
			map[i][9]=3;
		}
		map[2][1]=map[2][2]=map[2][3]=map[2][4]=map[2][5]=map[2][7]=map[2][8]=map[4][2]=map[4][3]=map[4][4]=map[4][5]=map[4][6]
		=map[4][8]=map[5][2]=map[5][4]=map[6][4]=map[6][6]=map[6][8]=map[7][2]=map[7][3]=map[7][4]=map[7][6]=map[8][6]=3;

		map[1][4]=map[3][1]=map[3][7]=map[8][5]=11;

		map[1][8]=10;map[8][7]=10;

		map[2][6]=map[6][7]=1;	

		map[4][7]=map[6][2]=2;
		
		map[7][8]=map[6][3]=8;
		
		map[5][5]=9;

		map[1][2]=16;

		map[5][3]=17;

		map[5][8]=19;

		map[8][1]=18;	
	}
	else if(level==3){
		for(i=0;i<10;++i)
		{
			map[i]=new Array();
			for(j=0;j<10;++j)
			{
				map[i][j]=0;
			}
		}//chushihua
		hero.x=1;
		hero.y=1;
		for(j=0;j<10;++j)
		{
			map[0][j]=3;
			map[9][j]=3;
		}

		for(i=0;i<10;++i)
		{
			map[i][0]=3;
			map[i][9]=3;
		}
		
		map[2][1]=map[2][2]=map[2][3]=map[2][5]=map[2][6]=map[2][7]=map[3][3]=map[3][5]=map[4][5]=map[4][7]=map[5][1]=map[5][2]
		=map[5][3]=map[5][5]=map[5][7]=map[6][5]=map[6][7]=map[7][2]=map[7][3]=map[7][4]=map[7][5]=map[7][7]=map[8][7]=3;

		map[1][4]=map[4][2]=map[7][8]=map[8][1]=11;

		map[2][8]=map[4][3]=1;

		map[4][8]=2;

		map[8][8]=10;

		map[3][2]=map[5][8]=8;

		map[8][6]=9;

		map[1][2]=16;

		map[1][8]=19;
		}
	else if(level==4){}
	else if(level==5){}
}
