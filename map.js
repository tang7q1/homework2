var map=new Array();
for(i=0;i<10;++i)
{
	map[i]=new Array();
	for(j=0;j<10;++j)
	{
		map[i][j]=0;
	}
}//chushihua
function changelevel(){
	if(level==1)
	{
		for(j=0;j<10;++j)//shang xia
		{
			map[0][j]=3;
			map[9][j]=3;
		}

		for(i=0;i<10;++i)//zuo you
		{
			map[i][0]=3;
			map[i][9]=3;
		}
		map[2][1]=map[2][3]=map[2][4]=map[2][5]=map[2][6]=map[3][6]=map[3][7]=map[4][1]=map[4][2]=map[4][4]=map[4][5]=map[4][6]
		=map[5][6]=map[6][1]=map[6][2]=map[6][3]=map[6][4]=map[6][6]=map[6][8]=map[8][4]=map[8][6]=3;

		map[2][2]=map[3][8]=map[4][3]=map[6][7]=map[7][4]=map[7][6]=1;
		map[1][7]=map[3][2]=map[7][8]=map[8][7]=11;
		
		map[7][1]=8;
		
		map[8][8]=9;
	}
	else if(level==2){}
	else if(level==3){}
	else if(level==4){}
	else if(level==5){}
}