var arr = [
    { dp: "Post-Images/img1.jpg", story: "Post-Images/img1.jpg" },
    { dp: "Post-Images/img2.jpg", story: "Post-Images/img2.jpg" },
    { dp: "Post-Images/img3.jpg", story: "Post-Images/img3.jpg" },
    { dp: "Post-Images/img4.jpg", story: "Post-Images/img4.jpg" },
    { dp: "Post-Images/img5.jpg", story: "Post-Images/img5.jpg" }
];

var storiyan = document.querySelector("#stories");

var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});
storiyan.innerHTML = clutter

storiyan.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector("#full-screen").style.display = "none"
    }, 3000);
})


var flw = document.querySelectorAll("#flw-btn a");

var check = 0;

flw.forEach(function(element) {
    element.addEventListener("click",function(){
        if(check == 0){
            element.innerHTML = "Unfollow";
            check = 1;
        }
        else{
            element.innerHTML = "Follow";
            check = 0;
        }
    })
})






var containers = document.querySelectorAll("#Post-img");
var containerd = document.querySelectorAll("#left-rxn");


containers.forEach(function (container) {
    var love = container.querySelector("#lovee");
    

    
    container.addEventListener("dblclick", function () {
        love.style.transform = "translate(-50%, -50%) scale(1)";
        love.style.opacity = 0.8;
        
        setTimeout(function () {
            love.style.opacity = 0;
        }, 700);
        setTimeout(function () {
            love.style.transform = "translate(-50%, -50%) scale(0)";
        }, 1000);
        
        setTimeout(() => {
            var loved = pintu.querySelector("#loved");
            loved.style.opacity = 1;
        }, 1000);
    });
});
