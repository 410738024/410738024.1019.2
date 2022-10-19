function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#FCDAC4"); //背景
	var count = 0
  for(var x=0; x<width;x=x+200){//每隔200畫一個
  for(var y=0; y<height;y=y+200){
	count=count+1
	//加入一段程式碼讓圖形填滿整個版面(螢幕)
		
	strokeWeight(5)//邊框粗度
	noFill()//不填上顏色
	rectMode(CORNER);	
	stroke("#FF42D0")//粉
	rect(70+x,70+y,50+map(mouseX,0,width,0,100))	
	//加入一段程式使圖形隨滑鼠改變 
	stroke("#1CCC94")//綠	
  ellipse(30+x,50+y,30+map(mouseX,0,width,0,50)) 	
	stroke("#FF7C2A")//橘色		
	rectMode(CENTER);
	triangle(10+x+map(mouseX,0,width,0,100),100+y+map(mouseX,0,width,0,200),300+x+map(mouseX,0,width,0,100),10+y+map(mouseX,0,width,0,100),10+x+map(mouseX,0,width,0,100),100+y+map(mouseX,0,width,0,100));//三角形	
  stroke("#1C5A93")//藍	
	triangle(100+x+map(mouseX,0,width,0,100),100+y+map(mouseX,0,width,0,200),100+x+map(mouseX,0,width,0,100),10+y+map(mouseX,0,width,0,100),10+x+map(mouseX,0,width,0,100),100+y+map(mouseX,0,width,0,100));//三角形	
}
	}
}
