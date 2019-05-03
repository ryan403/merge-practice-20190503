$(document).ready(function(){
    $("#courseTable").append("<tr><th>周次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var miniteUnit = secondUnit * 60;
    var hourUnit = miniteUnit * 60;
    var dayUnit = hourUnit * 24;
    
    for(var x=0; x<topicCount;x++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append("<td>"+
            (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
        $("#courseTable").append("<td>"+topic[x]+"</td>");
        $("#courseTable").append("</tr>"); 
    }
});