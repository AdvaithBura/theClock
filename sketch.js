var hour1, minute1, second1,hAngle,sAngle,mAngle, scSprite,colorButton;
var backColor = 0

function setup() {
  createCanvas(600,600);
  //createSprite(400, 200, 50, 50);
 colorButton = createButton("Click to change background color")
 colorButton.position(380,570);

}

function draw() {
  colorButton.mousePressed(() =>{
    if(backColor === 0){
    backColor = 255
    }else{
      backColor = 0
    }
    
    })
  background(backColor); 
  
  hour1 = hour();
  minute1 = minute();
  second1 = second();

  angleMode(DEGREES);
  sAngle = map(second1,0,60,0,360);
  mAngle = map(minute1,0,60,0,360);
  if(hour1 <= 12 && hour1 >= 0){
    hAngle = map(hour1,0,12,0,360)
    }
    if(hour1 <= 23 && hour1 >= 12){
      hAngle = map(hour1,12,24,0,360)
      }
 
      textSize(30);
      //stroke("yellow");
      fill("orange");
      if(second1 >=0 && second1 <=9 && minute1 >= 0 && minute1<=9){
        textTime(0,0);
      }else if(second1 >=0 && second1 <=9){
        textTime("",0);
      } else if(minute1 >= 0 && minute1<=9){
        textTime(0,"")
      } else{
      textTime("","");
      }

 var x = backColor/255-1
//console.log(x*-255)
 noFill();
 strokeWeight(10);
 stroke(x*-255);
 line(300,120,300,100);
 line(300,480,300,500);

 line(390,144.1154,400,126.7949);
 line(200,473.2051,210,455.8846);

 line(455.9,210,473.2,200);
 line(126.7949,400,144.1154,390);

 line(500,300,480,300);
 line(100,300,120,300);

 line(473.2,400,455.9,390);
 line(126.7949,200,144.1154,210);

 line(390,455.8846,400,473.2051);
 line(200,126.7949,210,144.1154);

translate(300,300);
/*
for(var i = 0; i <=180; i=i+30){
  // translate(300,300);
  push()
  stroke("white");
  strokeWeight(2);
   rotate(i);
   line(0,200,0,-200);
   pop();
 }
 */

 

stroke("red");
if(second1 >=1 && second1 <= 59){
arc(0,0,530,530,270,270+sAngle);
} else {
//  arc(0,0,530,530,269,271);
}
push()
rotate(sAngle-180)
line(0,0,0,165);
pop()

stroke("blue");
if(minute1 >= 1 && minute1 <=59){
arc(0,0,490,490,270,270+mAngle);
}else{

}
push()
rotate(mAngle-180)
line(0,0,0,135);
pop()

stroke("green");
if(hour1 != 0 && hour1 != 12){
arc(0,0,450,450,270,270+hAngle);
}else{

}
push()
rotate(hAngle-180)
line(0,0,0,105);
pop()

  drawSprites();
}

function textTime(min0,sec0){
  if(hour1>=1 && hour1 <=11){
    text(hour1 +":"+min0+minute1+":"+sec0+second1+" AM", 20,40);
    } else if(hour1 >= 13 && hour1 <=23){
      text(hour1-12 +":"+min0+minute1+":"+sec0+second1+" PM", 20,40);
    } else if(hour1 === 12){
      text(hour1 +":"+min0+minute1+":"+sec0+second1+" PM", 20,40);
    } else if(hour1 === 0){
      text(12 +":"+min0+minute1+":"+sec0+second1+" AM", 20,40); 
    }
}