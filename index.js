$(document).ready(function(){
    $("#Pass").hide();
    var password = "Anime"; 
    $("button").click(function (){
        var input = $("input").val();
        if (password === input) {
            $("#Pass").show();        
        }
    })
});
 
