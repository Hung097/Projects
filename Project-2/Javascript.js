var img_title ;
window.onload=function(){
    img_title=document.getElementById("img_title");
    img_title.addEventListener("click", function(){
        
    });
    img_title.addEventListener("mousemove", function(){
        img_title.src="Iamge/img_retitle.png"
    });
    img_title.addEventListener("mouseout", function(){
        img_title.src="Iamge/img_title.png"
    });

    var home=document.getElementById("home");
    var donate=document.getElementById("donate");
    var pock=document.getElementById("pock");
    var part2=document.getElementById("part2_content2");
    var face=document.getElementById("face1_content2");
    home.addEventListener("click", function(){
        
    });
    donate.addEventListener("click", function(){
        
    });
    pock.addEventListener("click", function(){

    });
    part2.addEventListener("click", function(){

    });
    face.addEventListener("click", function(){
        goWeb("facebook");
    });
}
function goWeb(str){
    window.location.replace("http://www."+str+".com.tw/");
}
