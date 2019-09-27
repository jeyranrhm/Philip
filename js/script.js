var mobile_nav=document.querySelector(".mobile_nav");
var mobile_button =document.querySelector(".mobile_button");
var close=document.querySelector(".x");
var blackoverlay=document.querySelector(".blackoverlay");
mobile_button.addEventListener("click", function(){
    mobile_nav.classList.add("active");
    blackoverlay.classList.add("active");
})
close.addEventListener("click",function(){
    mobile_nav.classList.remove("active");
    blackoverlay.classList.remove("active");
})

// effects part
var allCategories=document.querySelectorAll(".categories li");
var allImages=document.querySelectorAll(".images_part .row .type ")
for(var category of allCategories){
    category.addEventListener("click", function(){

        // removing active from categoies
        for(var cat of allCategories){
            cat.classList.remove("active");
        }
        // adding active to clicked cat.
        this.classList.add("active");


        var clickedDataId=this.getAttribute("data-id");
        if(clickedDataId==0){
            for(var img of allImages){
                img.classList.add("active");
            }
        }
        else{
            for(var img of allImages){
                img.classList.remove("active");
            }
            for(var img of allImages){
                if(img.getAttribute("data-id")== clickedDataId){
                    img.classList.add("active");
                }
            }
        }

    })
}
