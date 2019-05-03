var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMountain, imgMain, imgEnemy;

$(document).ready(function(){
    //0:可走、1：障礙物、2：終點、3：敵人
    mapArray = [0,1,1,0,0,0,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "SimpleRPG20190330/images/spriteSheet.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload=function(){
      //等到圖片載入後再執行這一段
        ctx.drawImage(imgMain,0,0,80,130, currentImgMainX, currentImgMainY, 200, 200);
    };
    
    imgMountain = new Image();
    imgMountain.src = "SimpleRPG20190330/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "SimpleRPG20190330/images/Enemy.png";
    
    imgMountain.onload=function(){
      imgEnemy.onload=function(){
          for(var x in mapArray){
              if(mapArray[x]==1){//障礙物
                  ctx.drawImage(imgMountain,32,65,32,32, x%3*200,Math.floor(x/3)*200, 200, 200);
              }else if(mapArray[x]==3){
                  ctx.drawImage(imgEnemy,7,40,104,135, x%3*200,Math.floor(x/3)*200, 200, 200);
              }
          }
      }  
    };
    
});

$(document).keydown(function(event){
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    event.preventDefault();
    switch(event.which){
        case 37:
            //console.log("左");
            targetImgMainX = currentImgMainX - 200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;
        case 38:
            //console.log("上");
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY - 200;
            cutImagePositionX = 355;
            break;
        case 39:
            //console.log("右");
            targetImgMainX = currentImgMainX + 200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        case 40:
            //console.log("下");
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY + 200;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    
    if(targetImgMainX<=400 && targetImgMainX>=0 &&
      targetImgMainY<=400 && targetImgMainY>=0){
        targetBlock = targetImgMainX/200 + targetImgMainY/200*3;
    }else{
        targetBlock=-1;
    }
    
    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3){
        
    }else{
        $("#talkBox").text("");
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }
    
    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMainX, currentImgMainY, 200, 200);
    
    switch(mapArray[targetBlock])
           {
               case undefined: //遇到牆壁
                   $("#talkBox").text("邊界");
               break;
               case 1: //遇到障礙
                   $("#talkBox").text("有山");
               break;
               case 2: //終點
                   $("#talkBox").text("抵達終點!");
               break;
               case 3: //有敵人
                   $("#talkBox").text("嗨~~");
               break;
           }
});
