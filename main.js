// global variables 
const enterButton = $(".enter-button");








// event listeners
document.body.addEventListener('mousemove', function(e) {
    let top = e.pageY;
    let left = e.pageX;
    let flashlight = document.getElementById("flashlight-id");
    flashlight.style.clip = "rect("+(top-100)+"px,"+left+"px,"+top+"px,"+(left-100)+"px)";
});