var player;
var currentPlay = 0;

function onYouTubeIframeAPIReady(){
    player = new YT.Player("player",
     {
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":0,
            "controls":0,
            "start":playTime[currentPlay][0],
            "end":playTime[currentPlay][1],
            "showinfo":0,
            "rel":0,
            "iv_load_policy":3
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
     }
    );
}

function onPlayerReady(event){
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    console.log("PlayerStateChange:"+event.data+"CurrentPlay:"+currentPlay);
    
    //if(event.data == 0 && (Math.floor(player.getCurrentTime())==playTime[currentPlay][1])) 
    //event.data == YT.PlayerState.ENDED
    //播放狀態 0是結束
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1])
    {
        if(currentPlay < playList.length-1)
        {
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else{
            currentPlay=0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    }
    
    if(player.getVideoLoadedFraction()>0){
        $("h2").text(player.getVideoData().title);
    }
     
}