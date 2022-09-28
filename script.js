$("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do"))
$("#currentDay").css("color","red")
for(var i=9;i<13;i++){
    
    $("<div>").appendTo(".container").attr("id", i).text(i + "am" + ": " ).css("padding","30px").css("outline-style","solid")
    .css("display","flex").on("click",function(){
        var promptResponse =prompt("Describe event")
        $("<div>").appendTo($(this)).text(promptResponse).css("margin-left","20px")
        localStorage.setItem("event"+i, promptResponse)})

        
    var timeId= i.toString() 
    if($("#" + timeId).attr("id")<moment().hour()){
        $("#" + timeId).attr("class","past")
    }else if ($("#" + timeId).attr("id")==moment().hour()){
        $("#" + timeId).attr("class","present")
    } else{
        $("#" + timeId).attr("class","future")
}
}
for(var i=9;i<13;++i){
    if(localStorage.getItem("event"+i)!=null){
        console.log("hello")
    $("#i").text($("#i").text()+localStorage.getItem("event"+i))}
}

for(var i=1;i<6;i++){
    $("<div>").appendTo(".container").text(i +"pm"+ ": ").attr("id", i).css("padding","30px").css("outline-style","solid").css("display","flex")
    .on("click",function(){$("<div>").appendTo($(this)).text(prompt("Describe event")).css("margin-left","20px")})
    var timeId= i.toString() 
    var parseTime = parseInt($("#" + timeId).attr("id")) + 12
    if(parseTime<moment().hour()){
        $("#" + timeId).attr("class","past")
    }else if (parseTime==moment().hour()){
        $("#" + timeId).attr("class","present")
    } else{
        $("#" + timeId).attr("class","future")
    }


}
$("#5").css("margin-bottom","40px")



